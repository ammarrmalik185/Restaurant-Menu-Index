import {StyleSheet, Text, TouchableOpacity, View} from "react-native";
import React from "react";

export const modesEnum = {normal:0, edit:1, add:2, addDetails:3 , view:4, select:5};

export function FooterButtons(props) {

    return (
        <View style={styles.footer}>
            {
                props.currentMode === modesEnum.normal &&
                <View style={styles.buttonContainer}>
                    <TouchableOpacity onPress={() => {
                        props.onCurrentModeChange(modesEnum.add);
                    }}>
                        <Text style={styles.buttonGreen}>Add New Location</Text>
                    </TouchableOpacity>
                </View>
            }
            {
                props.currentMode === modesEnum.edit &&
                <View style={styles.buttonContainer}>
                    <TouchableOpacity onPress={() => {
                        props.onCurrentModeChange(modesEnum.normal);
                    }}>
                        <Text style={styles.buttonGreen}>Cancel</Text>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={() => {
                        props.onEditConfirm();
                    }}>
                        <Text style={styles.buttonGreen}>Confirm</Text>
                    </TouchableOpacity>
                </View>
            }
            {
                props.currentMode === modesEnum.add &&
                <View style={styles.buttonContainer}>
                    <TouchableOpacity onPress={() => {
                        props.onCurrentModeChange(modesEnum.normal);
                    }}>
                        <Text style={styles.buttonGreen}>Cancel</Text>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={() => {
                        props.onCurrentModeChange(modesEnum.addDetails);
                    }}>
                        <Text style={styles.buttonGreen}>Confirm Location</Text>
                    </TouchableOpacity>
                </View>

            }
            {
                props.currentMode === modesEnum.addDetails &&
                <View style={styles.buttonContainer}>
                    <TouchableOpacity onPress={() => {
                        props.onCurrentModeChange(modesEnum.normal);
                    }}>
                        <Text style={styles.buttonGreen}>Cancel</Text>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={() => {
                        props.onAddConfirm();
                    }}>
                        <Text style={styles.buttonGreen}>Confirm</Text>
                    </TouchableOpacity>
                </View>

            }
            {
                props.currentMode === modesEnum.view &&
                <View style={styles.buttonContainer}>
                    <TouchableOpacity onPress={() => {
                        props.onCurrentModeChange(modesEnum.normal);
                    }}>
                        <Text style={styles.buttonGreen}>Back</Text>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={() => {
                        props.onCurrentModeChange(modesEnum.edit);
                    }}>
                        <Text style={styles.buttonGreen}>Edit</Text>
                    </TouchableOpacity>
                </View>

            }
            {
                props.currentMode === modesEnum.select &&
                <View style={styles.buttonContainer}>
                    <TouchableOpacity onPress={() => {
                        props.onCurrentModeChange(modesEnum.normal);
                    }}>
                        <Text style={styles.buttonGreen}>Cancel</Text>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={() => {
                        props.onCurrentModeChange(modesEnum.view);
                    }}>
                        <Text style={styles.buttonGreen}>View Details</Text>
                    </TouchableOpacity>
                </View>
            }
        </View>
    )
}

const styles = StyleSheet.create({
    buttonContainer:{
        flexDirection: "row",
        justifyContent: "space-evenly",
    },
    buttonGreen: {
        backgroundColor: "green",
        padding: 10,
        margin: 10,
        borderRadius: 5,
        alignItems: "center",
        justifyContent: "center",
        textAlign: "center",
        width: "100%",
    },
    footer: {
        position: "absolute",
        bottom: 0,
        left: 0,
        right: 0
    }
});
