import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import styles from './footer.style';

interface FooterProps {
  price: number;
  onPress: () => void;
}

const Footer: React.FC<FooterProps> = ({ price, onPress }) => {
  return (
    <View style={styles.footerContainer}>
      <View style={styles.priceContainer}>
           <Text style={styles.priceLabel}>Toplam</Text>
        <Text style={styles.priceText}>{price} ₺</Text>
      </View>
      <View style={styles.buttonContainer}>
        <TouchableOpacity style={styles.buyButton} onPress={onPress}>
          <Text style={styles.buyButtonText}>Satın Al</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default Footer;
