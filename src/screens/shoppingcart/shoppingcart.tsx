import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import styles from './shoppingcart.style'; // Stili dışarıdan alıyoruz

const ShoppingCart: React.FC = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Sepetim</Text>
      {/* Sepet içeriği burada yer alacak */}
      <Text>Sepetinizde henüz ürün yok!</Text>
      
    </View>
  );
};

export default ShoppingCart;
