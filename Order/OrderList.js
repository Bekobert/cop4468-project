import React, {useState, useEffect} from 'react'
import { View, Text } from 'react-native'
import {ListItem} from 'react-native-elements'

const OrderList = () => {
    
    
    const [orders, setorders] = useState([]);

    useEffect(() => {
        
        fetch('https://northwind.vercel.app/api/orders')
        .then((ords) => ords.json())
        .then((data) =>{

            setorders(data);
            
        })

    }, [])
    
    
    return (
        <View style={{flex: 1}} >

            <View style={{flex: 6, backgroundColor: 'powderblue'}} > 
                <Text>Order List</Text>
            </View>

            <View style={{flex:8, backgroundColor: 'lightsteelblue'}}>
            
                    {
                        orders.map((item) => (
                            <View key={item.id} style={{ flex: 1, backgroundColor: 'moccasin', padding: 20, margin: 10, borderRadius: 10}}>
                                <ListItem key={item.id}>
                                    <ListItem.Content>
                                        <ListItem.Title> {item.shipName} </ListItem.Title>
                                    </ListItem.Content>
                                </ListItem>
                            </View>
                        ))
                    }
                
            </View>
        </View>
    )
}

export default OrderList
