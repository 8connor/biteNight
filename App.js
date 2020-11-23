import { StatusBar } from 'expo-status-bar';
import React, { useEffect, useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Restaurants from './Components/Restaurants';

const key = "AIzaSyBZI9op6ZeKLFBJl-PJdQoaCbze8JU8V9E"
const googleString = `https://maps.googleapis.com/maps/api/place/findplacefromtext/json?input=pals&inputtype=textquery&fields=photos,formatted_address,name,rating,opening_hours,geometry&key=${key}`

export default function App() {
  const [search, setSearch] = useState("");

  const handleSearch = () => {
    fetch(googleString)
      .then(response => console.log(response))
      .catch(error => console.log(error));
  }

  return (
    <View style={styles.container}>
      {handleSearch()}
      <View>
        <Text style={{ color: 'white', marginTop: 100, fontSize: 30 }}>Find food</Text>
        <StatusBar hidden={true} />
      </View>

      <Restaurants />

    </View>

  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#242424',
    alignItems: 'center',
  },
});
