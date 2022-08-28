import React from "react";
import {Text, View} from "react-native";
import MapView from "./components/MapView";
import { FooterButtons, modesEnum } from "./components/FooterButtons";
import RestaurantDetailsModel from "./components/RestaurantDetailsModel";
import firestore from "@react-native-firebase/firestore";

export default function App() {
    const [selectedRestaurant, setSelectedRestaurant] = React.useState({
        title: "Title",
        description: "description",
        images: []
    });
    const [currentMode, setCurrentMode] = React.useState(modesEnum.normal);

    return (
        <View style={{height: "100%"}}>
            <Text></Text>
            <MapView
                addNewLocation={currentMode === modesEnum.add}
                bottomOffset={60}
                topOffset={60}

                onNewLocationDragEnd={(newLocation) => {
                    setSelectedRestaurant({...selectedRestaurant, latlng: newLocation});
                    console.log('New location: ', newLocation);
                }}
                onLocationSelected={(newLocation) => {
                    console.log('New location: ', newLocation);
                    setSelectedRestaurant(newLocation);
                    setCurrentMode(modesEnum.select);
                }}
            />
            <FooterButtons
                currentMode={currentMode}
                onCurrentModeChange={setCurrentMode}

                onEditConfirm={() => {
                    firestore().collection("restaurants").doc(selectedRestaurant.id).set({...selectedRestaurant, id:null}).then(r => {
                        console.log("Edited restaurant: ", r);
                        setCurrentMode(modesEnum.normal);
                    });
                }}
                onAddConfirm={() => {
                    firestore().collection("restaurants").add({...selectedRestaurant, id:null}).then(r => {
                        console.log("Added restaurant: ", r);
                        setCurrentMode(modesEnum.normal);
                    });
                }}
            />
            {(currentMode === modesEnum.view || currentMode === modesEnum.edit || currentMode === modesEnum.addDetails) &&
                <RestaurantDetailsModel
                    editable={currentMode !== modesEnum.view}
                    restaurant={selectedRestaurant}
                    onDataChange={setSelectedRestaurant}
                />
            }
        </View>
    );
}
