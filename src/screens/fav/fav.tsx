import React from 'react';
import { View, Text, FlatList,TouchableOpacity,Image} from 'react-native';
import styles from './fav.style';
import { useFavoriteStore } from '../../store/fav';
import ProductCard from '../../components/product/productcart'; // Kart component'i
import { useNavigation } from '@react-navigation/native'; // useNavigation import edilmeli


// const Fav = () => {
//   const { favorites } = useFavoriteStore(); // Store'dan favorileri al
  

//   const renderItem = ({ item }: any) => (
  const Fav = () => {
    const navigation = useNavigation();
  
    // Favori ürünleri store'dan al
    const { favorites } = useFavoriteStore();
  
    const handleGoBack = () => {
      navigation.goBack();
    };
  
    // Favori ürün kartı 
    const renderItem = ({ item }: any) => (
    <ProductCard
      name={item.title}
      price={item.price}
      image={item.images[0]} // ilk görsel
      description={item.description}
      productId={item.id.toString()} // props string ,????
    />
  );
 

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Favori Ürünler</Text>
      {favorites.length === 0 ? (
        <View style={styles.emptyContainer}>
          <Image
            source={require('../../assets/img/galp.png')} 
            style={styles.emptyImage}
            resizeMode="contain"
          />
         
        </View>
      ) : (
     
        <FlatList
          data={favorites}
          keyExtractor={(item) => item.id.toString()}
          renderItem={renderItem}
          contentContainerStyle={styles.listContainer}
          numColumns={2}
          
        />

      )}
      {/* Geri butonu */}
      <TouchableOpacity style={styles.backButton} onPress={handleGoBack}>
        <Image
          source={require('../../assets/img/back.png')} 
          style={styles.backIcon}
        />
      </TouchableOpacity>
    </View>
  );
};

export default Fav;