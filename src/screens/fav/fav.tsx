import React from 'react';
import { View, Text, FlatList, TouchableOpacity, Image } from 'react-native';
import styles from './fav.style';
import { useFavoriteStore } from '../../store/fav';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { useNavigation } from '@react-navigation/native';
import ProductCard from '../../components/product/productcart';
import { RootStackParamList } from '../../navigation/types';

const Fav = () => {
  const navigation = useNavigation<NativeStackNavigationProp<RootStackParamList>>();

  const { favorites } = useFavoriteStore();

  const handleGoBack = () => {
    navigation.goBack();
  };

 // Stack'teki (yıgın sayfa )bütün ekranları temizler  yalnızca 'Home' ekranını getir
 //gecislerinde sayfalar üst üste gecmedixs 
  const handleHomePress = () => {
    navigation.reset({
      index: 0,
      routes: [{ name: 'Home' }],
    });
  };

  const renderItem = ({ item }: any) => (
    <ProductCard
      name={item.title}
      price={item.price}
      image={item.images[0]}
      description={item.description}
      productId={item.id.toString()}
    />
  );

  return (
    <View style={styles.container}>
      
      <Text style={styles.title}>Favoriler</Text>
      {favorites.length === 0 ? (
        <View style={styles.emptyContainer}>
          <Image
            source={require('../../assets/img/galp.png')}
            style={styles.emptyImage}
            resizeMode="contain"
          />
          <Text style={styles.favText}>Favori Listeniz Boş</Text>
          <Text style={styles.imgText}>
            Beğendiklerinizi Favorilere Ekledikçe Burada Görebileceksiniz
          </Text>
          <TouchableOpacity style={styles.button} onPress={handleHomePress}>
            <Text style={styles.buttonText}>Ana Sayfaya Dön</Text>
          </TouchableOpacity>
        </View>
      ) : (
        <FlatList
          data={favorites}
          keyExtractor={(item) => item.id.toString()}
          renderItem={renderItem}
          contentContainerStyle={styles.listContainer}
          numColumns={2}
        
        showsVerticalScrollIndicator={false}
        />
      )}

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
