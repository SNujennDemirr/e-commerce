import React from 'react';
import { View, FlatList, Text, ActivityIndicator } from 'react-native';
import Header from '../../components/header/header';
import ProductCard from '../../components/product/productcart';
import SearchBar from '../../components/searchbar/searchbar';
import styles from './home.style';
import { useProducts } from '../../hooks/useProducts';

const Home: React.FC = () => {
  const { products, loading, onSearch } = useProducts();

  return (
    <View style={styles.container}>
      <Header title="Passo E-Commerce" />
      <SearchBar onSearch={onSearch} />

      <View style={styles.productsContainer}>
        {loading ? (
          <ActivityIndicator size="large" color="#000" />
        ) : (
          <FlatList
            data={products}
            keyExtractor={(item) => item.id.toString()}
            renderItem={({ item }) => (
              <ProductCard
                name={item.title}
                price={item.price}
                image={item.images[0]}
                description={item.description}
                productId={item.id.toString()}
              />
            )}
            numColumns={2}
            columnWrapperStyle={{ justifyContent: 'space-around' }}
            ListEmptyComponent={
              <Text>No products found matching your search criteria.</Text>
            }
          />
        )}
      </View>
    </View>
  );
};

export default Home;
