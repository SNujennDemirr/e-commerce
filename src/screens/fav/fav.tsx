// screens/fav/fav.tsx
import React from 'react';
import { View, Text } from 'react-native';
import styles from './fav.style'; // Buradaki import kullanılmış olacak

const Fav = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Favori Ürünler</Text>
      {/* Buraya FlatList vs. eklersin */}
    </View>
  );
};

export default Fav;
