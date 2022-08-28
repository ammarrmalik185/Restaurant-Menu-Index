import React from "react";
import {Text, TouchableOpacity, View, StyleSheet, TextInput} from "react-native";

export default function RestaurantDetailsModel(props) {
    const [title, setTitle] = React.useState(props.restaurant.title);
    const [description, setDescription] = React.useState(props.restaurant.description);
    const [images, setImages] = React.useState(props.restaurant.images || []);
    return (
        <View style={styles.model}>
            <View style={styles.container}>
                <View style={styles.header}>
                    {!props.editable && <Text style={styles.headerText}>{title}</Text>}
                    {props.editable &&
                        <TextInput
                            style={styles.inputText}
                            value={title}
                            onChangeText={(text) => {
                                setTitle(text);
                                props.onDataChange({...props.restaurant, title: text});
                            }}/>
                    }
                </View>
                <View style={styles.body}>
                    {!props.editable &&
                        <Text
                            style={styles.headerText}
                            numberOfLines={5}
                        >{description}</Text>
                    }
                    {props.editable &&
                        <TextInput
                            multiline={true}
                            numberOfLines={5}
                            style={styles.inputTextDescription}
                            value={description}
                            onChangeText={(text) => {
                                setDescription(text);
                                props.onDataChange({...props.restaurant, description: text});
                            }}/>
                    }
                </View>
            </View>
        </View>
    );
}
const styles = StyleSheet.create({
    model: {
        position: "absolute",
        bottom: "10%",
        left: "5%",
        right: "5%",
        top: "10%",
        borderRadius: 10,
        backgroundColor: 'green'
    },
    inputText:{
        borderColor: 'black',
        borderWidth: 1,
        borderRadius: 10,
        padding: 10,
        margin: 10,
        width: "100%",
        fontSize: 20,
    },
    inputTextDescription:{
        borderColor: 'black',
        borderWidth: 1,
        borderRadius: 10,
        padding: 10,
        width: "100%",

    },
    container:{
        margin: 20
    },
    header: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center'
    },
    headerText: {
        fontSize: 20,
        fontWeight: 'bold',
        color: '#000'
    }
});
