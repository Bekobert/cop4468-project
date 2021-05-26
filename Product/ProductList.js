import React, {useState, useEffect} from 'react'
import { View, Text } from 'react-native'
import {ListItem} from 'react-native-elements'


const ProductList = () => {

    const [products, setproducts] = useState([]);

    useEffect(() => {
       
        fetch('https://northwind.vercel.app/api/products')
        .then((prods) => prods.json())
        .then((data) => {

            setproducts(data);
            

        })

    }, [])

    return (
        <View style={{flex: 1}} >

            <View style={{flex: 6, backgroundColor: 'powderblue'}} > 
                <Text>Product List</Text>
            </View>

            <View style={{flex:8, backgroundColor: 'lightsteelblue'}}>
            
                    {
                        products.map((item) => (
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

export default ProductList
