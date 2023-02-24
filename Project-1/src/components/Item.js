import React from "react";
import { View } from "react-native";

const Item = (props) => {
    return (
        <View style = { styles.viewStyle }>
            { props.children }
        </View>
        // Yukarıdaki {props.children} , CarDetail dosyasında Item etiketi ile sardığımız veriyi alırız.
    );
}


const styles = {
    viewStyle: {
        marginLeft: 10,
        marginRight: 10,
        marginTop: 10,
        borderWidth: 1,
        borderColor: "gainsbro",
        borderRadius: 10,
        shadowColor: "black",
        shadowOffSet: { width: 1, height: 1 },
        shadowOpacity: 0.1,
    }
}


export default Item;