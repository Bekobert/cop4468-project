import React from 'react'
import { View, Text } from 'react-native'
import {Input} from 'react-native-elements'

const UpdateCategory = ({route}) => {
    
    const { t } = route.params;

    return (
        <View style={{flex:1}} >
            <View style={{flex:8, backgroundColor: 'lightsteelblue', justifyContent:'center'}}>

                <View style={{backgroundColor:'gainsboro', height:40, marginBottom:20}} />
                <View style={{backgroundColor:'gainsboro', height:40, marginBottom:20}} />
                <View style={{backgroundColor:'gainsboro', height:40, marginBottom:50}} />

                <View style={{backgroundColor:'moccasin', margin:10, borderRadius:10}} > 
                    <Text style={{fontFamily:'monospace', fontWeight:'bold', fontSize:30}} > Category Name </Text>
                    <Input placeholder= {t.name}/>
                </View>
                <View style={{backgroundColor:'moccasin', margin:10, borderRadius:10}} >
                    <Text style={{fontFamily:'monospace', fontWeight:'bold', fontSize:30}} > Category Infos </Text>
                    <Input placeholder= {t.description}/>
                </View>

                <View style={{backgroundColor:'gainsboro', height:40, marginTop:50}} />
                <View style={{backgroundColor:'gainsboro', height:40, marginTop:20}} />
                <View style={{backgroundColor:'gainsboro', height:40, marginTop:20}} />

            </View>
        </View>
    )
}

export default UpdateCategory
