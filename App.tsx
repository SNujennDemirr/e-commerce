import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Home from './src/screens/home/home'; 
import ProductDetail from './src/screens/productdetail/productdetail';  // Yeni ekranı ekliyoruz
import ShoppingCart from './src/screens/shoppingcart/shoppingcart';
import { RootStackParamList } from './src/navigation/types';



const Stack = createStackNavigator<RootStackParamList>();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="Home"
        screenOptions={{ headerShown: false }}>
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="ProductDetail" component={ProductDetail} />
        
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;