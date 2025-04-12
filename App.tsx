import React from 'react';
import { NavigationContainer } from '@react-navigation/native'; // Doğru kütüphane
import { createNativeStackNavigator } from '@react-navigation/native-stack'; // Native stack kullanıyoruz
import Home from './src/screens/home/home';
import ProductDetail from './src/screens/productdetail/productdetail';
import ShoppingCart from './src/screens/shoppingcart/shoppingcart';

import { RootStackParamList } from './src/navigation/types'; 

// Native Stack Navigator kullanıyoruz
const Stack = createNativeStackNavigator<RootStackParamList>(); 

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="Home"
        screenOptions={{ headerShown: false }}
      >
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="ProductDetail" component={ProductDetail} />
        <Stack.Screen name="ShoppingCart" component={ShoppingCart} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;