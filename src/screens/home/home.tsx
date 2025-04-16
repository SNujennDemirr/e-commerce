import React from 'react';
import { View, FlatList, Text, ActivityIndicator } from 'react-native';

import Header from '../../components/header/header';          // Sayfanın üst kısmındaki başlık
import ProductCard from '../../components/product/productcart'; // Her ürünün gösterildiği kart
import SearchBar from '../../components/searchbar/searchbar';   // Arama kutusu
import styles from './home.style';                             // Sayfa stilleri

import { useProducts } from '../../hooks/useProducts';         // Custom hook’umuzu import ediyoruz

const Home: React.FC = () => {
  // useProducts custom hook'undan verileri alıyoruz
  const { products, loading, onSearch } = useProducts();

  return (
    <View style={styles.container}>
      {/* Sayfa başlığı */}
      <Header title="Passo E-Commerceeee" />

      {/* Arama kutusu, input girildiğinde onSearch fonksiyonunu tetikler */}
      <SearchBar onSearch={onSearch} />

      {/* Ürünlerin listelendiği alan */}
      <View style={styles.productsContainer}>
        {loading ? (
          // Eğer veriler hala çekiliyorsa spinner göster
          <ActivityIndicator size="large" color="#000" />
        ) : (
          // FlatList ile ürünleri grid şekilde gösteriyoruz
          <FlatList
            data={products} // Listelenecek ürün verisi
            keyExtractor={(item) => item.id.toString()} // Her ürünün benzersiz anahtarı 
            renderItem={({ item }) => (  // //item, products içindeki her bir objedir.Her ürün için bir ProductCard render edilir
              <ProductCard
                name={item.title}                   // Ürün adı
                price={item.price}       // Fiyat 
                image={item.images[0]}              // İlk görsel
                description={item.description}      // Açıklama
                productId={item.id.toString()}      // Detaya geçerken id lazım  //
                // //
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
