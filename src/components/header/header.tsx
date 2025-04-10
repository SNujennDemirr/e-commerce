import React from 'react';
import { View, Text, Image, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native'; // Burada doğru kütüphane
import { NativeStackNavigationProp } from '@react-navigation/native-stack'; // Burada native-stack kullanıyoruz
import styles from './header.style';
import { RootStackParamList } from '../../navigation/types'; // Parametreler için tanımlama

// Header için tip tanımlaması
type HeaderNavigationProp = NativeStackNavigationProp<RootStackParamList, 'Home'>;

interface HeaderProps {
  title: string;
}

const Header = ({ title }: HeaderProps) => {
  // useNavigation ile navigation'ı alıyoruz
  const navigation = useNavigation<HeaderNavigationProp>();

  const goToShoppingCart = () => {
    navigation.navigate('ShoppingCart');
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>{title}</Text>
      <TouchableOpacity onPress={goToShoppingCart}>
        <Image
          source={require('../../assets/img/shopping-cart.png')}
          style={styles.cartIcon}
        />
      </TouchableOpacity>
      <Image
        source={require('../../assets/img/Vector.png')}
        style={styles.vectorIcon}
      />
    </View>
  );
};

export default Header;
