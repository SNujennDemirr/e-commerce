import React from 'react';
import { View, Text } from 'react-native';
import { RouteProp } from '@react-navigation/native';
import { RootStackParamList } from '../../navigation/types';

// route üzerinden parametreyi alıyoruz
type ProductDetailRouteProp = RouteProp<RootStackParamList, 'ProductDetail'>;

interface ProductDetailProps {
  route: ProductDetailRouteProp;
}

const ProductDetail: React.FC<ProductDetailProps> = ({ route }) => {
  const { productId } = route.params; // Parametreyi alıyoruz

  return (
    <View>
      <Text>Product ID: {productId}</Text>
    </View>
  );
};

export default ProductDetail;
