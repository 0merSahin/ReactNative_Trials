import React from "react";
import { View, Text, TouchableOpacity } from "react-native";


const Button = (props) => {
    const { buttonStyle, buttonTextStyle } = styles;

    return (
        <TouchableOpacity onPress = {props.onPress} style = {buttonStyle} >
            <Text style = {buttonTextStyle}>
                { props.title }
            </Text>
        </TouchableOpacity>
    );
}


const styles = {
    buttonStyle: {
        flex: 1,
        marginLeft: 120,
        marginRight: 120,
        backgroundColor: "aqua",
        padding: 10,
        borderRadius: 50,
    },

    buttonTextStyle: {
        textAlign: "center",
        flex: 1,
        fontSize: 18,
        fontWeight: "500",
    }
}


export default Button;