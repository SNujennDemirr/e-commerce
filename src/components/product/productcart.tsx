import React from 'react';
import { View, Text, Image } from 'react-native';
import Button from '../button/button';
import { useNavigation } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';
import { RootStackParamList } from '../../navigation/types';
import styles from './productcart.style';

interface ProductCardProps {
  name: string;
  price: number; // artık string değil, doğrudan number alıyoruz
  image: string;
  description: string;
  productId: string; //NEDEN STRİGN SORRR ? ? ? 
}

type ProductCardNavigationProp = StackNavigationProp<RootStackParamList, 'ProductDetail'>;

const ProductCard: React.FC<ProductCardProps> = ({ name, price, image, description, productId }) => {
  const navigation = useNavigation<ProductCardNavigationProp>();

  const handlePress = () => {
    navigation.navigate('ProductDetail', { productId });
  };

  return (
    <View style={styles.productCard}>
      {/* Dinamik image */}
      <Image source={{ uri: image }} style={styles.productImage} />

      <View style={styles.priceButton}>
        <Text style={styles.priceText}>₺{price}</Text>
      </View>

      <Text style={styles.productName}>{name}</Text>
      <Text style={styles.productDescription} numberOfLines={2}>{description}</Text>

      <Button title="İncele" onPress={handlePress} />
    </View>
  );
};

export default ProductCard;
