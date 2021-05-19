import React from 'react';
import { StyleSheet, View } from 'react-native';

export default function App() {
  return (
    <View style={{flex: 1}}>
      
      <View style = {{backgroundColor: 'powderblue', flex: 2}} > </View>
      <View style = {{backgroundColor: 'lightsteelblue', flex:10}} > 
        
        <View style = {{flex: 2, backgroundColor: 'lavender', padding: 10, margin: 30, borderRadius: 20 }} > </View>
        <View style = {{flex: 2, backgroundColor: 'gainsboro', padding: 10, margin: 30, borderRadius: 20 }} > </View>
        <View style = {{flex: 2, backgroundColor: 'moccasin', padding: 10, margin: 30, borderRadius: 20 }} > </View>

      </View>
    

    </View>
  );
}


