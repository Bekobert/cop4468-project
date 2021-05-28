import React from 'react'
import { View, Text } from 'react-native'

export default function ProductDetails({route, navigation}) {

    let {t} = route.params;
    
    return (
        <View style={{height:screen.height, backgroundColor: 'moccasin', justifyContent:'center', alignItems:'center', borderRadius:'50px', padding: '30px', margin:'30px'}} >
            <Text style={{fontSize:'20px'}} > {t.name}</Text>
            <Text style={{fontSize:'30px'}} > Price: {t.unitPrice}</Text>
            <Text style={{fontSize:'20px'}} > InStock: {t.unitsInStock}</Text>
            <Text style={{fontSize:'10px'}} > Quantity: {t.quantityPerUnit}</Text>
            <Text style={{fontSize:'10px'}} > On Order: {t.unitsOnOrder}</Text>
        </View>
    )
}
