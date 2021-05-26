import React from 'react'
import { Button } from 'react-native'
import { View } from 'react-native'

export default function IndexPage({ navigation }){


    //Navigation Functions

    const goProducts = () =>{
        navigation.navigate('Products');
    }

    const goCategories = () =>{
        navigation.navigate('Categories');

    }

    const goOrders = () =>{
        navigation.navigate('Orders');

    }


    return (
    <View style={{flex: 1}}>
      
      <View style = {{backgroundColor: 'powderblue', flex: 1}} > </View>
      <View style = {{justifyContent: 'center', backgroundColor: 'lightsteelblue', flex:10}} > 
        
        <View style = {{flex: 2, backgroundColor: 'lavender', padding: 10, margin: 30, borderRadius: 20 }} > 
            <Button style = {{}} onPress={() => goProducts()} title='Products!' ></Button>
        </View>
        <View style = {{flex: 2, backgroundColor: 'gainsboro', padding: 10, margin: 30, borderRadius: 20 }} > 
            <Button onPress={() => goCategories()} title='Categories!' ></Button>
        </View>
        <View style = {{flex: 2, backgroundColor: 'moccasin', padding: 10, margin: 30, borderRadius: 20 }} > 
            <Button onPress={() => goOrders()} title='Orders!' ></Button>
        </View>

      </View>
    

    </View>
    );
}

