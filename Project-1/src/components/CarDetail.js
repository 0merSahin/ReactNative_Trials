import React from "react";
import { Text, View, Image, Linking } from "react-native";

import Item from "./Item";
import ItemSection from "./itemSection";
import Button from "./Button";


const CarDetail = (props) => {
/*
    const { headerContainer, headerText, imageStyle } = styles

    Yukarıdaki kodu eğer buraya eklersek,
    Aşağıda style etiketlerinde kullandığımız styles. yazısını silebiliriz.
    
    ÖRN:  style = { styles.headerContainer }  Kullanmak yerine:
          style = { headerContainer }         yazabilir.
    aynı işlevi görecektir.
*/

    return (
        <Item>
            <ItemSection>
                <View style = { styles.headerContainer }>
                    <Text style = { styles.headerText }>
                        { props.object.address.city }
                    </Text>
                    <Text>
                        { props.object.id }
                        - { props.object.name }
                    </Text>
                </View>
            </ItemSection>
            <ItemSection>
                <Image 
                    style = { styles.imageStyle }
                    source={{
                        uri: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRVQh-aVMk4OBeaG-bqUWatbTqM3DCDUP5I1GPi06c&s"
                    }}
                />
            </ItemSection>
            <ItemSection>
                <Button
                    title = "Click me"
                    onPress = {() => {
                        console.log (props.object.address.city);
                    }}
                    // Yukarıdaki fonksiyon Button.js 'de Button fonksiyonuyla bağlantılı!
                />
            </ItemSection>
            <ItemSection>
                <Button
                    title = "Site Aç"
                    onPress = { () => {
                        Linking.openURL("https://linktr.ee/omersahin");
                    }}
                />
            </ItemSection>
        </Item>
    )
}


const styles = {
    headerContainer: {
        flexDirection: "column",
        alignItems: "center",
    }, 
    
    headerText: {
        fontSize: 18,
        fontWeight: "500",
        textTransform: "uppercase",
    },
    
    imageStyle: {
        height: 300,
        flex: 1,
        width: 0,
        borderRadius: 50,
    }
}


export default CarDetail;