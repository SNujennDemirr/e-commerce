import React from 'react';
import { View, Text, FlatList } from 'react-native';
import styles from './fav.style';
import { useFavoriteStore } from '../../store/fav';
import ProductCard from '../../components/product/productcart'; // Kart component'i

const Fav = () => {
  const { favorites } = useFavoriteStore(); // Store'dan favorileri al

  const renderItem = ({ item }: any) => (
    <ProductCard
      name={item.title}
      price={item.price}
      image={item.images[0]} // ilk görsel
      description={item.description}
      productId={item.id.toString()} // props string bekliyor
    />
  );

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Favori Ürünler</Text>

      {favorites.length === 0 ? (
        <Text style={styles.emptyText}>Henüz favori eklenmemiş.</Text>
      ) : (
        <FlatList
          data={favorites}
          keyExtractor={(item) => item.id.toString()}
          renderItem={renderItem}
          contentContainerStyle={styles.listContainer}
          numColumns={2}
          
        />

      )}
      
    </View>
  );
};

export default Fav;
