import React from 'react';
import { View, Text, Image, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';
import styles from './header.style';
import { RootStackParamList } from '../../navigation/types'; // Parametreler için tanımlama

type HeaderNavigationProp = StackNavigationProp<RootStackParamList, 'Home'>;

interface HeaderProps {
  title: string;
}

const Header = ({ title }: HeaderProps) => {
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
