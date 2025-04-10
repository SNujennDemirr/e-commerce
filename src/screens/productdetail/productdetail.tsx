import React from 'react';
import { View, Text, TouchableOpacity, Image } from 'react-native';
import { RouteProp, useNavigation } from '@react-navigation/native';
import { RootStackParamList } from '../../navigation/types';
import styles from './productdetail.style';

// route üzerinden parametreyi alıyoruz
type ProductDetailRouteProp = RouteProp<RootStackParamList, 'ProductDetail'>;

interface ProductDetailProps {
  route: ProductDetailRouteProp;
}

const ProductDetail: React.FC<ProductDetailProps> = ({ route }) => {
  const { productId } = route.params; // Parametreyi alıyoruz
  const navigation = useNavigation();

  // Geri butonu işlemi
  const handleGoBack = () => {
    navigation.goBack(); // Önceki sayfaya yönlendir
  };

  return (
    <View style={styles.container}>
      {/* Geri Butonu */}
      <TouchableOpacity style={styles.backButton} onPress={handleGoBack}>
        <Image
          source={require('../../assets/img/back.png')} // Geri butonu için resim
          style={styles.backIcon}
        />
      </TouchableOpacity>

      {/* Ürün Detayları */}
      <Image source={require('../../assets/img/f5dc1.png')} style={styles.productImage} />

      <Text style={styles.productTitle}>Product ID: {productId}</Text>
      {/* Diğer içerikler */}
    </View>
  );
};

export default ProductDetail;
