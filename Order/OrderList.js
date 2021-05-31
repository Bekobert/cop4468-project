import React, {useState, useEffect} from 'react'
import { View, Text, TouchableOpacity } from 'react-native'
import {ListItem} from 'react-native-elements'

const OrderList = () => {
    
    
    const [orders, setorders] = useState([]);


    useEffect(() => {
        
        fetch('https://northwind.vercel.app/api/orders')
        .then((ords) => ords.json())
        .then((data) =>{

            setorders(data);
            //orders.sort((x,y) => (x.orderDate < y.orderDate) ? 1 : -1);

        })

    }, [])
    
    
    return (
        <View style={{flex: 1}} >

            

            <View style={{flex:8, backgroundColor: 'lightsteelblue'}}>
            
                    {
                        orders.map((item) => (
                            <TouchableOpacity key={item.id} style={{ flex: 1, backgroundColor: 'moccasin', padding: 20, margin: 10, borderRadius: 10}}>
                                
                                    <ListItem>
                                            <ListItem.Content>
                                                    <ListItem.Title> ID: {item.customerId} </ListItem.Title>
                                                    <ListItem.Subtitle> Order Date: {item.orderDate} </ListItem.Subtitle>
                                                    <ListItem.Subtitle> Ship Name: {item.shipName} </ListItem.Subtitle>
                                                    <ListItem.Subtitle> Ship Address: {item.shipAddress.street} {item.shipAddress.city} {item.shipAddress.region} {item.shipAddress.postalCode} {item.shipAddress.country}</ListItem.Subtitle>
                                            </ListItem.Content>
                                    </ListItem>
                                
                            </TouchableOpacity>
                            
                        ))
                    }
                
            </View>
        </View>
    )
}

export default OrderList
