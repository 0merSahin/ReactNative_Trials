import React from "react";
import { StyleSheet, View, Text, FlatList, TouchableOpacity } from "react-native";

import books from "../../data/books.json";


const BookList = (props) => {
    return (
        <View>
            <FlatList
                //horizontal = { true } // Bu kod listemizi yatay hale getirir.
                showsHorizontalScrollIndicator = { false }
                showsVerticalScrollIndicator = { false } /* Yandaki iki kod ise scrollbar'ların kapanmasını sağlar */
                data = { books }   // Verileri aldığımız yer. ("books" import edildi!)
                
                renderItem = {(object) => {
                    return (
                        <TouchableOpacity 
                            style = {styles.buttonStyle}
                            onPress = {() => {
                                props.navigation.navigate ("BookDetail");
                            }}
                        >
                            <Text style = {styles.listStyle}>
                                {object.item.title} 
                            </Text>
                        </TouchableOpacity>
                    );
                }}
                
                keyExtractor = {(book) => book.title}
                // Listelerde "key" yok ise yuakrıdaki kod ile her bir bir liste elemanına "key" eklenmiş olur.
                // Eklenen bu "key"ler bizim belirlediğimiz değerleri alır. (book.title) gibi.
                // Biz burada her bir elemanın "title" değeri farklı olduğu için "key" olarak "title"ları seçtik.
            />
        </View>
    );
}


// Eğer aşağıdaki gibi yazarsak birçok hatadan korunmuş oluruz:
const styles = StyleSheet.create ({
    listStyle: {
        //marginVertical: 50,
    }, 
    buttonStyle: {
        backgroundColor: "white",
        color: "white",
        padding: 15,
        margin: 30,
        borderRadius: 10,
        marginHorizontal: 50,
        alignItems: "center",
    }
});


export default BookList;