import React, { useState, useEffect, useRef } from 'react';
import MapView, {UrlTile} from 'react-native-maps';
import { Marker } from 'react-native-maps';
import {View, StyleSheet, Button, TouchableOpacity, Text} from "react-native";
import firestore from '@react-native-firebase/firestore';
import Geolocation from '@react-native-community/geolocation';

export default function App(props) {

    const [position, setPosition] = useState({
        latitude: 10,
        longitude: 10,
        latitudeDelta: 0.0421,
        longitudeDelta: 0.0421,
    })
    const [markers, setMarkers] = useState([])
    const [initialized, setInitialized] = useState(false)
    const styles = StyleSheet.create({
        container: {
            position: 'absolute',
            top: 0,
            left: 0,
            right: 0,
            bottom: 0
        },
        map: {
            position: 'absolute',
            top: props.topOffset,
            left: 0,
            right: 0,
            bottom: props.bottomOffset
        },
        goToLocationButton:{
            position: "absolute",
            right: 5,
            bottom: props.bottomOffset + 5,
            backgroundColor: "green",
            borderRadius: 100,
            width: 50,
            height: 50,
            textAlign: "center",
            justifyContent: "center",
            alignItems: "center",
        }
    });

    useEffect(() => {
        if (initialized) return;
        firestore()
            .collection('restaurants')
            .onSnapshot(querySnapshot => {
                console.log('Total restaurants: ', querySnapshot.size);
                let newMarkers = [];
                querySnapshot.forEach(documentSnapshot => {
                    newMarkers.push({id: documentSnapshot.id, ...documentSnapshot.data()})
                });
                setMarkers(newMarkers);
            }, (error) => {
                console.log(error);
            });
        Geolocation.getCurrentPosition((pos) => {
            const crd = pos.coords;
            setPosition({
                latitude: crd.latitude,
                longitude: crd.longitude,
                latitudeDelta: 0.0421,
                longitudeDelta: 0.0421,
            });
        })
        setInitialized(true);
    })

    return (
        <View style={styles.container}>
            <MapView
                showsUserLocation={true}
                showsMyLocationButton={true}
                followsUserLocation={true}
                style={styles.map}
                initialRegion={position}>

                {!props.addNewLocation && markers.map((marker, index) => {
                    return(
                    <Marker
                        key={index}
                        coordinate={marker.latlng}
                        title={marker.title}
                        description={marker.description}
                        onPress={(e) => {
                            if (props.onNewLocationDragEnd != null)
                                props.onLocationSelected(marker)
                        }}
                    />
                )})}
                {props.addNewLocation && <Marker coordinate={position}
                        title={"Add New Location"}
                        key={0}
                        draggable
                        pinColor={'green'}
                        onDragEnd={(e) => {
                            if (props.onNewLocationDragEnd != null)
                                props.onNewLocationDragEnd(e.nativeEvent.coordinate);
                        }}
                />}
            </MapView>
        </View>
    );
}
