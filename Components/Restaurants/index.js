import React from "react";
import { StyleSheet, Text, View } from 'react-native';


function Restaurants(){
    return(
        <View style={style.container}>
            <Text>
                This is where the establishments will show up.
            </Text>
        </View>
    )
}

const style = StyleSheet.create({
    container: {
        backgroundColor: 'lightgray'
    }
})

export default Restaurants;