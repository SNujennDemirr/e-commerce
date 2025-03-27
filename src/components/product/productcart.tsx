import React from 'react';
import { View, Text, Image } from 'react-native';
import styles from './productcart.style';
import Button from '../button/button';

interface ProductCardProps {
  name: string;
  price: string;
  image: string;
  description: string;
}

const ProductCard: React.FC<ProductCardProps> = ({ name, price, image ,description}) => {
  const handlePress = () => {
  
  };

  return (
    <View style={styles.productCard}>
      {/* Ürün resmi */}
      <Image source={require('../../assets/img/f5dc1.png')} style={styles.productImage} />
      
      {/* Ürün adı */}
      <Text style={styles.productName}>{name}</Text>
      
      
      {/* Ürün fiyatı */}
      <Text style={styles.productPrice}>{price}</Text>
    {/* Ürün Açıklaması */}
    <Text style={styles.productDescription}>{description}</Text>

      {/* Buton */}
      <Button title="İncele" onPress={handlePress} />
    </View>
  );
};

export default ProductCard;
