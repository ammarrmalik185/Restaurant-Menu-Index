import React from "react";
import { Text, View } from "react-native";
import MapView from "./components/MapView";

export default function App () {
  return (
    <View>
      <Text>Welcome to React Native!</Text>
      <Text>To get started, edit App.js</Text>
      <Text>instructions</Text>
        <MapView/>
    </View>
  );
}
