import React from "react";
import { View, Text } from "react-native";


const CarDetail = (props) => {
    return <View>
        <Text>
            { props.object.id }
            - { props.object.name }
        </Text>
    </View>
}


export default CarDetail;
