import React from 'react';
import { View, Text, Image } from 'react-native';
import Button from '../button/button';
import { useNavigation } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';
import { RootStackParamList } from '../../navigation/types';
import styles from './productcart.style'; // Stil dosyasını import ettik

interface ProductCardProps {
  name: string;
  price: string;
  image: string;  // Dinamik resim yolu
  description: string;
  productId: string; // Ürün ID'si
}

type ProductCardNavigationProp = StackNavigationProp<RootStackParamList, 'ProductDetail'>;

const ProductCard: React.FC<ProductCardProps> = ({ name, price, image, description, productId }) => {
  const navigation = useNavigation<ProductCardNavigationProp>();

  const handlePress = () => {
    navigation.navigate('ProductDetail', { productId });
  };

  return (
    <View style={styles.productCard}>
      {/* Ürün resmi */}
      <Image source={require('../../assets/img/f5dc1.png')} style={styles.productImage} />
      
      {/* Ürün fiyatı */}
      <View style={styles.priceButton}>
      <Text style={styles.priceText}>₺{price.toLocaleString()}</Text>
      </View>

      {/* Ürün adı */}
      <Text style={styles.productName}>{name}</Text>
      
    {/* Ürün Açıklaması */}
    <Text style={styles.productDescription}>{description}</Text>
    

      {/* Buton */}
      <Button title="İncele" onPress={handlePress} />
    </View>
  );
};

export default ProductCard;
