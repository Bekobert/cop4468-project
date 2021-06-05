import React, {useState, useEffect, useContext} from 'react'
import { Button } from 'react-native';
import { View, Text, TouchableOpacity } from 'react-native'
import {ListItem} from 'react-native-elements'
import {FireOutlined, EditTwoTone, FireTwoTone} from '@ant-design/icons'
import {ThemeContext} from '../MyThemeContext'


const CategoryList = () => {

    const [categories, setcategories] = useState([]);
    const Atheme = useContext(ThemeContext)

    useEffect(() => {
        
        fetch('https://northwind.vercel.app/api/categories')
        .then((cats) => cats.json())
        .then((data) =>{

            setcategories(data);
            

        })

    }, [])


    return (
        <View style={{flex: 1}} >

            <View style={{flex:20, backgroundColor: 'lightsteelblue'}}>
            
                    {
                        categories.map((item) => (

                            <View key={item.id} style={{flexDirection:'row'}} >
                                <View style={{ flex: 6, backgroundColor: 'moccasin', padding: 20, margin: 10, borderRadius: 10}}>
                                    
                                    <ListItem containerStyle={{backgroundColor:'gainsboro', borderRadius:'10'}} >
                                        <ListItem.Content>
                                            <ListItem.Title style={{fontFamily:'monospace'}} >{item.name} </ListItem.Title>
                                            <ListItem.Subtitle style={{fontFamily:'monospace'}} >{item.description} </ListItem.Subtitle>
                                        </ListItem.Content>
                                    </ListItem>
                                    
                                </View>
                                <TouchableOpacity style={{ flex: 2, backgroundColor: Atheme.secondaryBackground, margin:10, borderRadius:10, alignItems:'center', justifyContent:'center' }}>
                                    <EditTwoTone twoToneColor="#8b0000" style={{fontSize:'40px'}} />
                                </TouchableOpacity>
                                <TouchableOpacity style={{ flex: 2, backgroundColor: Atheme.secondaryBackground, margin:10, borderRadius:10, alignItems:'center', justifyContent:'center' }}>
                                    <FireTwoTone twoToneColor="#8b0000" style={{fontSize:'40px'}} />
                                </TouchableOpacity>

                            </View>

                        ))
                    }
                
            </View>
        </View>
    )
}

export default CategoryList
