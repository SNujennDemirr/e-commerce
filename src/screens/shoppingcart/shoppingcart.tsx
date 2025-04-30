import React from 'react';
import { View, Text } from 'react-native';
import styles from './shoppingcart.style';

const ShoppingCart: React.FC = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Sepetim</Text>
      <Text>Sepetinizde henüz ürün yok!</Text>
    </View>
  );
};

export default ShoppingCart; //giriş effrd
