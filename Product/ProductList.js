import React, {useState, useEffect, useContext} from 'react'
import { View, Text, TouchableOpacity } from 'react-native'
import {ListItem, Icon} from 'react-native-elements'
import {FireTwoTone} from '@ant-design/icons'
import {NavigationContainer} from '@react-navigation/native'
import {createStackNavigator} from '@react-navigation/stack'
import {ThemeContext} from '../MyThemeContext'




const ProductList = ({navigation}) => {
    
    const Atheme = useContext(ThemeContext) 
    const [products, setproducts] = useState([]);

    useEffect(() => {
       
        getData();

    }, []);


    const getData = () =>{
        
        fetch('https://northwind.vercel.app/api/products')
        .then((prods) => prods.json())
        .then((data) => {

            setproducts(data);
            

        })
    }

    const goDetails = (item) =>{
        navigation.navigate('Product Details', {t:item});
    }

    const deleteProducts = (item, id) =>{
        let requestOptions = {
            method: 'DELETE',
            body: JSON.stringify({id:id})
        }

        fetch('https://northwind.vercel.app/api/products/' + id, requestOptions)
        .then((res) => res.json())
        .then((data) =>{
            getData();
            
        })
        alert(item.name + ' deleted')
    }

    return (

        <View style={{flex: 1}} >
            
            <View style={{flex:8, backgroundColor: Atheme.primaryBackground}}>
            
                {
                    products.map((item) => (
                        <View key={item.id} style={{flexDirection:'row'}} >
                            <TouchableOpacity onPress={() => goDetails(item)} style={{ flex: 10, backgroundColor: 'moccasin', padding: 20, margin: 10, borderRadius: 10}}>
                                <ListItem containerStyle={{ backgroundColor: 'gainsboro', borderRadius:10 }} key={item.id}>
                                    <View sytle={{flexDirection:'row'}} >
                                        <ListItem.Content>
                                            <ListItem.Title style={{fontFamily: 'monospace'}}> {item.name} </ListItem.Title>
                                            <View style= {{flexDirection:'row'}} >
                                                <Text style={{fontFamily: 'monospace'}} > In Stock: {item.unitsInStock} </Text>
                                                <Text style={{fontFamily: 'monospace'}} > Price: {item.unitPrice} </Text>
                                            </View>
                                        </ListItem.Content>
                                        
                                    </View>
                                </ListItem>
                            </TouchableOpacity>
                            <TouchableOpacity onPress={() => deleteProducts(item, item.id)} style={{flex:1, padding:20, margin: 10, backgroundColor: 'moccasin', borderRadius: 10, justifyContent:'center', alignItems:'center'}}>
                                <FireTwoTone twoToneColor='#8b0000' style={{fontSize:'50px'}} />
                            </TouchableOpacity>
                        </View>
                        
                    ))
                }
                
            </View>
        </View>
    )
}

export default ProductList;