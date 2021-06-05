import React from 'react'
import { View, Text } from 'react-native'
import {Input} from 'react-native-elements'


const AddCategory = ({navigation}) => {
    return (
        <View style={{flex:1}} >
            <View style={{flex:8, backgroundColor: 'lightsteelblue', justifyContent:'center'}}>

                <View style={{backgroundColor:'gainsboro', height:40, marginBottom:20}} />
                <View style={{backgroundColor:'gainsboro', height:40, marginBottom:20}} />
                <View style={{backgroundColor:'gainsboro', height:40, marginBottom:50}} />

                <View style={{backgroundColor:'moccasin', margin:10, borderRadius:10}} > 
                    <Text style={{fontFamily:'monospace', fontWeight:'bold', fontSize:30}} > Category Name </Text>
                    <Input placeholder= 'Enter a name'/>
                </View>
                <View style={{backgroundColor:'moccasin', margin:10, borderRadius:10}} >
                    <Text style={{fontFamily:'monospace', fontWeight:'bold', fontSize:30}} > Category Infos </Text>
                    <Input placeholder= 'Enter an info'/>
                </View>

                <View style={{backgroundColor:'gainsboro', height:40, marginTop:50}} />
                <View style={{backgroundColor:'gainsboro', height:40, marginTop:20}} />
                <View style={{backgroundColor:'gainsboro', height:40, marginTop:20}} />

            </View>
        </View>
    )
}

export default AddCategory
