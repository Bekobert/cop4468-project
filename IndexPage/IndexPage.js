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
      <View style = {{backgroundColor: 'lightsteelblue', flex:10}} > 
        
        <View style = {{flex: 2, backgroundColor: 'lavender', padding: 10, margin: 30, borderRadius: 20 }} > 
            <Button onPress={() => goProducts()} title='Go to Products!' ></Button>
        </View>
        <View style = {{flex: 2, backgroundColor: 'gainsboro', padding: 10, margin: 30, borderRadius: 20 }} > 
            <Button onPress={() => goCategories()} title='Go to Categories!' ></Button>
        </View>
        <View style = {{flex: 2, backgroundColor: 'moccasin', padding: 10, margin: 30, borderRadius: 20 }} > 
            <Button onPress={() => goOrders()} title='Go to Orders!' ></Button>
        </View>

      </View>
    

    </View>
    );
}

