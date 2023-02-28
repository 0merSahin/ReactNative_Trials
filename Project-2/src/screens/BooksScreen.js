import React from "react";
import { StyleSheet, View, Text, TouchableOpacity } from "react-native";

import BookList from "../components/BookList";


const BooksScreen = (props) => {
    return (
        <View style = {styles.container}>
            <BookList navigation = {props.navigation} />
        </View>
        
        // yukarıda "BookList" etiketinin içerisinde kullanılan ilk "navigation" ibaresi bizim verdiğimiz bir isim.
        // Bu ibare "BookList" component'inin içerisinde props üzerinden çağırılacak. (örn: props.navigation)
    );
}


// Eğer aşağıdaki gibi yazarsak birçok hatadan korunmuş oluruz ve yazarken öneriler karşımıza gelir:
const styles = StyleSheet.create ({
    container: {
        padding: 50,
        flex: 1,
    },
    buttonStyle: {
        backgroundColor: "white",
        color: "white",
        padding: 15,
        borderRadius: 10,
        marginHorizontal: 50,
        alignItems: "center",
    }
});


export default BooksScreen;