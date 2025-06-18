import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

// Sayfa bileşenleri
import Home from './src/screens/home/home';
import ProductDetail from './src/screens/productdetail/productdetail';
import ShoppingCart from './src/screens/shoppingcart/shoppingcart';
import Favorites from './src/screens/fav/fav';
import { RootStackParamList } from './src/navigation/types';
const Stack = createNativeStackNavigator<RootStackParamList>();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="Home"
        screenOptions={{ headerShown: false }} //????
      >
        {/* Ana ekran */}
        <Stack.Screen name="Home" component={Home} />
        
        {/* Ürün detay ekranı */}
        <Stack.Screen name="ProductDetail" component={ProductDetail} />
        
        {/* Sepet ekranı */}
        <Stack.Screen name="ShoppingCart" component={ShoppingCart} />
        
        {/* Favoriler ekranı */}
        <Stack.Screen name="Favorites" component={Favorites} />
        
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
