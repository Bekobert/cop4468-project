import React from 'react';
import IndexPage from './IndexPage/IndexPage'
import OrderList from './Order/OrderList'
import CategoryList from './Category/CategoryList'
import ProductList from './Product/ProductList'
import ProductDetails from './Product/ProductDetails'
import AddCategory from './Category/AddCategory'
import UpdateCategory from './Category/UpdateCategory'
import {NavigationContainer} from '@react-navigation/native'
import {createStackNavigator} from '@react-navigation/stack'
import TPro from './MyThemeContext'


export default function App() {

  const Stack = createStackNavigator();

  return (  

    <TPro>
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen name="Index" component={IndexPage} />
          <Stack.Screen name="Products" component={ProductList} />
          <Stack.Screen name="Product Details" component={ProductDetails} />
          <Stack.Screen name="Categories" component={CategoryList} />
          <Stack.Screen name="Orders" component={OrderList} />
          <Stack.Screen name='AddCategory' component={AddCategory} />
          <Stack.Screen name='UpdateCategory' component={UpdateCategory} />
        </Stack.Navigator>
      </NavigationContainer>
    </TPro>


    //<IndexPage></IndexPage>
    
  );
}


