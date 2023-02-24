import React from "react";
import { Text } from "react-native";
import Item from "./Item";
import ItemSection from "./itemSection";


const CarDetail = (props) => {
    return (
        <Item>
            <ItemSection>
                <Text>
                    { props.object.id }
                    - { props.object.name }
                </Text>
            </ItemSection>
        </Item>
    );
}


export default CarDetail;