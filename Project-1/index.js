// TEMEL İŞLEM ADIMLARI:
// import library
// creat component
// render component to screen


// Library:
import React from "react";
import {Text, AppRegistry, View} from "react-native";

import Header from "./src/components/Header";
import CarList from "./src/components/CarList";
import Item from "./src/components/Item";

const isHermes = () => !!global.HermesInternal;

// Component:
const App = () => {
    return (
        <View style = {{flex: 1}}> 
            <Header title = {"Arabalar"} />
            <CarList />
        </View>
    );
};



// Render Component to Screen:
/* ReactNative.AppRegistry.registerComponent ("FirstProject", () => App); */
AppRegistry.registerComponent ("FirstProject", () => App);