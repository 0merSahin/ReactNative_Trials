import React from "react";
import { View } from "react-native";


const ItemSection = (props) => {
    return (
        <View style = { styles.viewStyle }>
            { props.children }
        </View>
    );
}


const styles = {
    viewStyle: {
        borderBottomWidth: 1,
        marginLeft: 5,
        marginRight: 5,
        borderColor: "gainsbro",
        flexDirection: "row", // Ana ekseni yatay yaptık.
        justifyContent: "flex-start",
        padding: 5
    }
}


export default ItemSection;