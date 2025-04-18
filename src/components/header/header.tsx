import React from 'react';
import { View, Text, Image, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import styles from './header.style';
import { RootStackParamList } from '../../navigation/types';

type HeaderNavigationProp = NativeStackNavigationProp<RootStackParamList, 'Home'>;

interface HeaderProps {
  title: string;
}

const Header = ({ title }: HeaderProps) => {
  const navigation = useNavigation<HeaderNavigationProp>();

  const goToShoppingCart = () => {
    navigation.navigate('ShoppingCart');
  };

  const goToFavorites = () => {
    navigation.navigate('Favorites');
  };

  return (
    <View style={styles.container}>
      {/* Sol ikon (Favoriler) */}
      <TouchableOpacity style={styles.sideContainer} onPress={goToFavorites}>
        <Image
          source={require('../../assets/img/Vector.png')}
          style={styles.leftIcon}
        />
      </TouchableOpacity>

      {/* Başlık */}
      <Text style={styles.title}>{title}</Text>

      {/* Sağ ikon (Sepet) */}
      <TouchableOpacity style={styles.sideContainer} onPress={goToShoppingCart}>
        <Image
          source={require('../../assets/img/shopping-cart.png')}
          style={styles.rightIcon}
        />
      </TouchableOpacity>
    </View>
  );
};

export default Header;
