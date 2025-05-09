import React from 'react';
import { View, FlatList, Text, ActivityIndicator} from 'react-native';
import Header from '../../components/header/header';         
import ProductCard from '../../components/product/productcart'; 
import SearchBar from '../../components/searchbar/searchbar';  
import styles from './home.style';                             

import { useProducts } from '../../hooks/useProducts';       

const Home: React.FC = () => {
  // useProducts custom hook'undan verileri alıyoruz
  const { products, loading, onSearch } = useProducts();

  return (
    <View style={styles.container}>
      {  }
      <Header title="Passo E-Commerce" />

      {/* Arama kutusu, input girildiğinde onSearch fonksiyonunu tetikler */}
      <SearchBar onSearch={onSearch} />

      {/* Ürünlerin listelendiği alan */}
      <View style={styles.productsContainer}>
        {loading ? (
          
          <ActivityIndicator size="large" color="#000" />
        ) : (
          
          
          <FlatList
            data={products} //  gelen Listelenecek ürün verisi
            keyExtractor={(item) => item.id.toString()} // Her ürünün benzersiz anahtarı 
            renderItem={({ item }) => (  // //item, products içindeki her bir objedir.Her ürün için bir ProductCard render edilir
              
      <ProductCard
        name={item.title}
        price={item.price}
        image={item.images[0]}
        description={item.description}
        productId={item.id.toString()}
      />
   
            )}
            numColumns={2} // 2 sütunlu grid yapısı
            columnWrapperStyle={{ justifyContent: 'space-around' }} // Aradaki boşluk
            ListEmptyComponent={<Text>No products found matching your search criteria.</Text>}
          />
        )}
      </View>
    </View>
  );
};

export default Home;
