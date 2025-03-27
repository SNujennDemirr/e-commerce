import React, { useState } from 'react';
import { View, FlatList } from 'react-native';
import Header from '../../components/header/header';
import ProductCard from '../../components/product/productcart';
import SearchBar from '../../components/searchbar/searchbar';
import styles from './home.style';

const Home: React.FC = () => {
  // Ürünleri başlangıçta belirleyelim
  const [products] = useState([
    { id: '1', name: 'Bed Room', price: '₺19.000', image: 'f5dc1.png', description:'A description, description, description, de...'},
    { id: '2', name: 'Child Room', price: '₺29.000', image: 'f5dc1.png',description:'A description, description, description, de...' },
    { id: '3', name: 'Play Room', price: '₺39.000', image: 'f5dc1.png' ,description:'A description, description, description, de...'},
    { id: '4', name: 'Music Room', price: '₺49.000', image: 'f5dc1.png' ,description:'A description, description, description, de...'},
  ]);

  // Arama işlemi için filtrelenmiş ürünleri tutacağız
  const [filteredProducts, setFilteredProducts] = useState(products);

  // Arama işlemi
  const handleSearch = (query: string) => {
    const filtered = products.filter(product =>
      product.name.toLowerCase().includes(query.toLowerCase())
    );
    setFilteredProducts(filtered);
  };


  return (
    <View style={styles.container}>
      {/* Başlık */}
      <Header title="Passo E-Commerce" />

      {/* Arama Çubuğu */}
      <SearchBar onSearch={handleSearch} />


      {/* Ürün Listesi */}
      <View style={styles.productsContainer}>
        <FlatList
          data={filteredProducts}
          keyExtractor={(item) => item.id}
          renderItem={({ item }) => (
            <ProductCard 
              name={item.name} 
              price={item.price} 
              image={item.image} 
              description={item.description}
            />
          )}
          numColumns={2} // Ürün kartlarını 2 sütun halinde göster
          columnWrapperStyle={{ justifyContent: 'space-around' }} // Kartlar arasında boşluk
        />
        
      </View>
    </View>
  );
};

export default Home;
