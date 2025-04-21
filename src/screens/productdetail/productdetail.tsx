import React from 'react';
import { View, Text, TouchableOpacity, Image, ScrollView, ActivityIndicator } from 'react-native';
import { RouteProp, useNavigation } from '@react-navigation/native';
import { RootStackParamList } from '../../navigation/types';
import styles from './productdetail.style';
import {useProducts} from '../../hooks/useProducts'; // Custom hook: Ürünleri çekmek için

// route tipi: navigation ile gelen parametreleri tipliyoruz
type ProductDetailRouteProp = RouteProp<RootStackParamList, 'ProductDetail'>;

interface ProductDetailProps {
  route: ProductDetailRouteProp;
}

const ProductDetail: React.FC<ProductDetailProps> = ({ route }) => {
  // navigation’dan gelen productId parametresi
  const { productId } = route.params;

  // ekranlar arasında gezinmek için navigation hook’u
  const navigation = useNavigation();

  // Custom hook kullanarak ürün listesini ve yüklenme durumunu alıyoruz
  const { products, loading } = useProducts();

  // Gelen productId'ye göre ilgili ürünü ürün listesinden buluyoruz
  const product = products.find((item) => item.id.toString() === productId);

  // Geri tuşuna basıldığında bir önceki sayfaya dönmek için
  const handleGoBack = () => {
    navigation.goBack();
  };

  // Ürünler yükleniyorsa loader göster
  if (loading) {
    return <ActivityIndicator size="large" color="#000" />;
  }

  // Ürün bulunamazsa kullanıcıya bilgi göster
  if (!product) {
    return (
      <View style={styles.container}>
        <Text>Ürün bulunamadı.</Text>
      </View>
    );
  }

  return (
    <ScrollView contentContainerStyle={styles.container}>
      {/* Geri gitmek için sol üst köşeye konulan buton */}
      <TouchableOpacity style={styles.backButton} onPress={handleGoBack}>
        <Image
          source={require('../../assets/img/back.png')} 
          style={styles.backIcon}
        />
      </TouchableOpacity>

      {/* Ürünün ilk görseli */}
      <Image source={{ uri: product.images[0] }} style={styles.productImage} />

      {/* Ürünün başlığı */}
      <Text style={styles.productTitle}>{product.title}</Text>

      {/* Ürünün açıklaması */}
      <Text style={styles.productDescription}>{product.description}</Text>

      {/* Ürünün fiyatı */}
      {/* <Text style={styles.productPrice}>₺{product.price}</Text> */}
    </ScrollView>
  );
};

export default ProductDetail;
