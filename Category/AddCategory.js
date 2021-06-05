import React, {useState} from 'react'
import { View, Text } from 'react-native'
import {Input, Button} from 'react-native-elements'


const AddCategory = ({route, navigation}) => {

    const [name, setname] = useState('')
    const [description, setdescription] = useState('')

    const addRequest = () =>{
        let requestOptions = {
            method: 'POST',
            body: JSON.stringify({description, name})
        }

        fetch('https://northwind.vercel.app/api/categories', requestOptions)
        .then((res) => navigation.goBack())
        
    }

    return (
        <View style={{flex:1}} >
            <View style={{flex:8, backgroundColor: 'lightsteelblue', justifyContent:'center'}}>

                <View style={{backgroundColor:'gainsboro', height:40, marginBottom:20}} />
                <View style={{backgroundColor:'gainsboro', height:40, marginBottom:20}} />
                <View style={{backgroundColor:'gainsboro', height:40, marginBottom:50}} />

                <View style={{backgroundColor:'moccasin', margin:10, borderRadius:10}} > 
                    <Text style={{fontFamily:'monospace', fontWeight:'bold', fontSize:30}} > Category Name </Text>
                    <Input value={name} onChange={(newval) => {setname(newval.target.value)}} />
                </View>
                <View style={{backgroundColor:'moccasin', margin:10, borderRadius:10}} >
                    <Text style={{fontFamily:'monospace', fontWeight:'bold', fontSize:30}} > Category Infos </Text>
                    <Input value={description} onChange={(newval) => {setdescription(newval.target.value)}} />
                </View>
                <Button onPress = {addRequest} title='Submit' titleStyle={{color:'black'}} containerStyle={{margin:30, borderRadius:10}} buttonStyle={{backgroundColor:'moccasin'}} />

                <View style={{backgroundColor:'gainsboro', height:40, marginTop:50}} />
                <View style={{backgroundColor:'gainsboro', height:40, marginTop:20}} />
                <View style={{backgroundColor:'gainsboro', height:40, marginTop:20}} />

            </View>
        </View>
    )
}

export default AddCategory
