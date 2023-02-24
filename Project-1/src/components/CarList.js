import React, { Component } from "react";
import { View, Text, ScrollView } from "react-native";
import axios from "axios";
import CarDetail from "./CarDetail";

class CarList extends Component {

    constructor () {
        super();
        this.state = { CarList: [] };
    }

    
    componentDidMount() {
        axios.get("https://jsonplaceholder.typicode.com/users").then((response) => {
            this.setState({ CarList: response.data });
        });
        // API adersine kendi bilgisayarından bir dosya da girebilirsin:
        //  "/Users/omer/Desktop/myAPI.json"   gibi.
    }


    renderList = () => {
        /*      1. SECENEK:
        return this.state.CarList.map ((object) => {
            return ( 
                <View>
                    <Text key = { object.name }> { object.name } </Text>
                    <Text key = { object.address.city }> { object.address.city } </Text> 
                </View>
            );
        });
        */
        
        //      2. SECENEK:
        return this.state.CarList.map ((object) => {
            return <CarDetail key = { object.id } object = {object} />
            // DİKKAT: Yukarıdaki "key" kısmına her veri için benzersiz olması gereken bir veriyi yazmamız gerekiyor.
        });
    }


    render() {
        console.log (this.state);
        
        return (
            <ScrollView>
                { this.renderList() }
            </ScrollView>
            // ScrollView doğru çalışması için,
            // index.js > App > View'in içerisine flex:1 vermemiz gerekiyor.
        );
    }
}

export default CarList;
