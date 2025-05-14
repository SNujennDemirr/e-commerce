import React from 'react';
import { View, Text, TouchableOpacity, Image, ScrollView, ActivityIndicator } from 'react-native';
import Footer from '../../components/footer/footer';
import { RouteProp, useNavigation } from '@react-navigation/native';
import { RootStackParamList } from '../../navigation/types';
import styles from './productdetail.style';
import { useProducts } from '../../hooks/useProducts';
import { useCartStore } from '../../store/cart';

type ProductDetailRouteProp = RouteProp<RootStackParamList, 'ProductDetail'>;

interface ProductDetailProps {
  route: ProductDetailRouteProp;
}

const ProductDetail: React.FC<ProductDetailProps> = ({ route }) => {
  const { productId } = route.params;
  const navigation = useNavigation();
  const { products, loading } = useProducts();
  const { addToCart } = useCartStore();

  const product = products.find((item) => item.id.toString() === productId);

  const handleGoBack = () => navigation.goBack();

  const handleAddToCart = () => {
  if (product) {
    addToCart({
      id: product.id,
      title: product.title,
      price: product.price,
      image: product.images[0],
      description: product.description, 
    });
  }
};


  if (loading) return <ActivityIndicator size="large" color="#000" />;

  if (!product) {
    return (
      <View style={styles.container}>
        <Text>Ürün bulunamadı.</Text>
      </View>
    );
  }

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <TouchableOpacity style={styles.backButton} onPress={handleGoBack}>
        <Image source={require('../../assets/img/back.png')} style={styles.backIcon} />
      </TouchableOpacity>
      <Image source={{ uri: product.images[0] }} style={styles.productImage} />
      <Text style={styles.productTitle}>{product.title}</Text>
      <Text style={styles.productDescription}>{product.description}</Text>
      

      <Footer price={product.price} onPress={handleAddToCart} />
    </ScrollView>
  );
};

export default ProductDetail;
