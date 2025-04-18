import React from 'react';
import { View, Text, Image, TouchableOpacity } from 'react-native';
import Button from '../button/button';
import { useNavigation } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';
import { RootStackParamList } from '../../navigation/types';
import { useFavoriteStore } from '../../store/fav';  // Zustand store'u import ediyoruz
import styles from './productcart.style';  // Stil dosyasını import ediyoruz

interface ProductCardProps {
  name: string;
  price: number;
  image: string;
  description: string;
  productId: string;
}

type ProductCardNavigationProp = StackNavigationProp<RootStackParamList, 'ProductDetail'>;

const ProductCard: React.FC<ProductCardProps> = ({ name, price, image, description, productId }) => {
  const navigation = useNavigation<ProductCardNavigationProp>();

  // Zustand store'dan favori işlemlerini alıyoruz
  const { addFavorite, removeFavorite, isFavorite } = useFavoriteStore();

  const favorideMi = isFavorite(Number(productId)); // Favori olup olmadığını kontrol ediyoruz

  // Favori butonuna tıklandığında çalışacak fonksiyon
  const handleFavoritePress = () => {
    if (favorideMi) {
      removeFavorite(Number(productId)); // Favori değilse, favoriye ekliyoruz
    } else {
      addFavorite({
        id: Number(productId),
        title: name,
        price: price,
        description,
        images: [image],
      }); // Favoriye ekliyoruz
    }
  };

  const handlePress = () => {
    navigation.navigate('ProductDetail', { productId });
  };

  return (
    <View style={styles.productCard}>
      {/* Favori butonu sola alındı */}
      <TouchableOpacity onPress={handleFavoritePress} style={styles.favoriteIconContainer}>
        <Image
          source={
            favorideMi
            ? require('../../assets/img/Vector.png')  // Favori değilse, boş kalp
              : require('../../assets/img/favicon.png')  // Favori olduğunda kırmızı kalp
              
          }
          style={styles.favoriteIcon}
        />
      </TouchableOpacity>

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
