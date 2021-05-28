import React, {useState, useEffect} from 'react'
import { Button } from 'react-native';
import { View, Text } from 'react-native'
import {ListItem} from 'react-native-elements'


const CategoryList = () => {

    const [categories, setcategories] = useState([]);

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
                            <View key={item.id} style={{ flex: 1, backgroundColor: 'moccasin', padding: 20, margin: 10, borderRadius: 10}}>
                    
                                <ListItem key={item.id}>
                                    <ListItem.Content>
                                        <ListItem.Title> {item.name} </ListItem.Title>
                                    </ListItem.Content>
                                </ListItem>
                                
                            </View>
                        ))
                    }
                
            </View>
        </View>
    )
}

export default CategoryList
