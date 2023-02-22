// import libraries
import React from "react";
import ReactNative, { Text, View } from "react-native";
/* Yukarıda ReactNative'i silebiliriz. */


// create components
const Header = (props) => {
    const { textStyling, viewStyle } = styles;
    return (
        <View style = {viewStyle}>
            <Text style = {textStyling}>
                {props.title}
            </Text>
        </View>
    );
}


// components'in style'ı:
const styles = {
    textStyling: {
        fontSize: 22
    },

    viewStyle: {
        backgroundColor: "gainsboro",
        height: 40,
        justifyContent: "center",
        alignItems: "center",
        marginTop: 34,
        paddingLeft: 80
    }
};



// make components available to other components
export default Header;
/* Yukarıdaki kod ile, Header comp'unu başka comp'larda kullanılabilir hale getirdik */
