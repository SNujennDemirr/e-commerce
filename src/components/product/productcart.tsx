import React from 'react';
import { View, Text, Image, TouchableOpacity } from 'react-native';
import Button from '../button/button';
import { useNavigation } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';
import { RootStackParamList } from '../../navigation/types';
import { useFavoriteStore } from '../../store/fav';  
import styles from './productcart.style';  

interface ProductCardProps {
  name: string;
  price: number;
  image: string;
  description: string;
  productId: string; // string ??  --??
}

type ProductCardNavigationProp = StackNavigationProp<RootStackParamList, 'ProductDetail'>; //-- 

const ProductCard: React.FC<ProductCardProps> = ({ name, price, image, description, productId }) => { // -
  const navigation = useNavigation<ProductCardNavigationProp>();

  const { addFavorite, removeFavorite, isFavorite } = useFavoriteStore();

  const favorideMi = isFavorite(Number(productId));

  const handleFavoritePress = () => {
    if (favorideMi) {
      removeFavorite(Number(productId));
    } else {
      addFavorite({
        id: Number(productId),
        title: name,
        price: price,
        description,
        images: [image],
      });
    }
  };

  const handlePress = () => {
    navigation.navigate('ProductDetail', { productId });
  };

  return (
    <View style={styles.productCard}>
      <TouchableOpacity onPress={handleFavoritePress} style={styles.favoriteIconContainer}>
        <Image
          source={
            favorideMi
              ? require('../../assets/img/Vector1.png')  // Favori olduğunda dolu 
              : require('../../assets/img/favicon.png') // Favori değilse boş
          }
          style={[
            
            favorideMi ? styles.favoriteIconActive : styles.favoriteIconInactive,
          ]}
        />
      </TouchableOpacity>

      <Image source={{ uri: image }} style={styles.productImage} />

      <View style={styles.priceButton}>
        <Text style={styles.priceText}>₺{price}</Text>
      </View>

      <Text style={styles.productName}>{name}</Text>
      <Text style={styles.productDescription} numberOfLines={2}>
        {description}
      </Text>

      <Button title="İncele" onPress={handlePress} />
    </View>
  );
};

export default ProductCard;
