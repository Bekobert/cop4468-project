import React from 'react'
import { View, Text, TouchableOpacity, StyleSheet} from 'react-native'

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
      
      <View style = {{justifyContent: 'center', backgroundColor: 'lightsteelblue', flex:10}} > 
        
        <TouchableOpacity style = {{flex: 2, backgroundColor: 'lavender', padding: 10, margin: 30, borderRadius: 20 }} onPress={() => goProducts()}>
            <View style = {styles.centered}>  
                <Text style={{}} >PRODUCTS</Text>
            </View>
        </TouchableOpacity>
        
        <TouchableOpacity style = {{flex: 2, backgroundColor: 'gainsboro', padding: 10, margin: 30, borderRadius: 20 }} onPress={() => goCategories()}>
            <View style = {styles.centered}> 
                <Text style={{}} >CATEGORIES</Text>
            </View>
        </TouchableOpacity>

        <TouchableOpacity style = {{flex: 2, backgroundColor: 'moccasin', padding: 10, margin: 30, borderRadius: 20 }} onPress={() => goOrders()}>
            <View style = {styles.centered}> 
                <Text style={{}} >ORDERS</Text>
            </View>
        </TouchableOpacity>

      </View>
    
    </View>
    );

    
}

const styles = StyleSheet.create({
    // ...
    centered: {
      alignItems:'center',
      margin: '40px'
    }
  });