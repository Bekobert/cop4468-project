import React from 'react';
import IndexPage from './IndexPage/IndexPage'
import OrderList from './Order/OrderList'
import CategoryList from './Category/CategoryList'
import ProductList from './Product/ProductList'
import ProductDetails from './Product/ProductDetails'
import {NavigationContainer} from '@react-navigation/native'
import {createStackNavigator} from '@react-navigation/stack'

export default function App() {

  const Stack = createStackNavigator();

  return (  

    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Index" component={IndexPage} />
        <Stack.Screen name="Products" component={ProductList} />
        <Stack.Screen name="Product Details" component={ProductDetails} />
        <Stack.Screen name="Categories" component={CategoryList} />
        <Stack.Screen name="Orders" component={OrderList} />
      </Stack.Navigator>
    </NavigationContainer>

    //<IndexPage></IndexPage>
    
  );
}


