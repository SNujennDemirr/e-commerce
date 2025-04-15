import React, { useEffect, useState } from 'react';
import { View, FlatList, Text, ActivityIndicator } from 'react-native';
import Header from '../../components/header/header';
import ProductCard from '../../components/product/productcart';
import SearchBar from '../../components/searchbar/searchbar';
import styles from './home.style';
import { fetchProducts } from '../../services/api'; // API servisinden veri çekeceğiz

interface Product {
  id: number;
  title: string;
  price: number;
  description: string;
  images: string[];
}

const Home: React.FC = () => {
  const [products, setProducts] = useState<Product[]>([]);
  const [filteredProducts, setFilteredProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const getProducts = async () => {
      const data = await fetchProducts();
      setProducts(data);
      setFilteredProducts(data);
      setLoading(false);
    };

    getProducts();
  }, []);

  const handleSearch = (query: string) => {
    const filtered = products.filter(product =>
      product.title.toLowerCase().includes(query.toLowerCase())
    );
    setFilteredProducts(filtered);
  };

  return (
    <View style={styles.container}>
      <Header title="Passo E-Commerceeee" />
      <SearchBar onSearch={handleSearch} />

      <View style={styles.productsContainer}>
        {loading ? (
          <ActivityIndicator size="large" color="#000" />
        ) : (
          <FlatList
            data={filteredProducts}
            keyExtractor={(item) => item.id.toString()}
            renderItem={({ item }) => (
              <ProductCard
                name={item.title}
                price={item.price.toString()}
                image={item.images[0]}
                description={item.description}
                productId={item.id.toString()}
              />
            )}
            numColumns={2}
            columnWrapperStyle={{ justifyContent: 'space-around' }}
            ListEmptyComponent={<Text>No products found matching your search criteria.</Text>}
          />
        )}
      </View>
    </View>
  );
};

export default Home;
