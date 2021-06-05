import React, {useState, useEffect, useContext, useCallback} from 'react'
import { View, Text, TouchableOpacity } from 'react-native'
import {ListItem} from 'react-native-elements'
import {EditTwoTone, FireTwoTone} from '@ant-design/icons'
import {ThemeContext} from '../MyThemeContext'
import { useFocusEffect } from '@react-navigation/native';


const CategoryList = ({route,navigation}) => {

    const [categories, setcategories] = useState([]);
    const Atheme = useContext(ThemeContext)


    useFocusEffect(useCallback(() => {

        getData();
        
    }, []));

    const getData = () =>{
        
        fetch('https://northwind.vercel.app/api/categories')
        .then((cats) => cats.json())
        .then((data) => {

            setcategories(data);
            

        })
    }

    const deleteCategory = (item, id) =>{
        let requestOptions = {
            method: 'DELETE',
            body: JSON.stringify({id:id})
        }

        fetch('https://northwind.vercel.app/api/categories/' + id, requestOptions)
        .then((res) => res.json())
        .then((data) =>{
            getData();
            
        })
        alert(item.name + ' deleted')
    }

    const ACat = () =>{
        navigation.navigate('AddCategory');
    }

    const UCat = (item) =>{
        navigation.navigate('UpdateCategory', {t:item});
    }

    return (
        <View style={{flex: 1}} >

            <View style={{flex:1, height:50, backgroundColor: 'lightsteelblue'}}>
                <TouchableOpacity onPress={() => ACat()} style={{backgroundColor:'moccasin', margin:10, borderRadius:10, alignItems:'center', padding:20}} >
                    <Text>Add Category</Text>
                </TouchableOpacity>
                
                <View>

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
                                <TouchableOpacity onPress={() => UCat(item)} style={{ flex: 2, backgroundColor: Atheme.secondaryBackground, margin:10, borderRadius:10, alignItems:'center', justifyContent:'center' }}>
                                    <EditTwoTone twoToneColor="#8b0000" style={{fontSize:'40px'}} />
                                </TouchableOpacity>
                                <TouchableOpacity onPress={() => deleteCategory(item, item.id)} style={{ flex: 2, backgroundColor: Atheme.secondaryBackground, margin:10, borderRadius:10, alignItems:'center', justifyContent:'center' }}>
                                    <FireTwoTone twoToneColor="#8b0000" style={{fontSize:'40px'}} />
                                </TouchableOpacity>

                            </View>

                        ))
                    }
                </View>
                
            </View>
        </View>
    )
}

export default CategoryList
