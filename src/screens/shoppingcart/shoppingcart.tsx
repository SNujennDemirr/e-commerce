import React from 'react';
import {
  View,
  Text,
  FlatList,
  Image,
  TouchableOpacity,
} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import styles from './shoppingcart.style';
import { useCartStore } from '../../store/cart';
import Footer from '../../components/footer/footer';
import NumericInput from '../../components/NumericInput/NumericInput';
import { RootStackParamList } from '../../navigation/types';

type NavigationProp = NativeStackNavigationProp<RootStackParamList, 'ShoppingCart'>;

const ShoppingCart: React.FC = () => {
  const navigation = useNavigation<NavigationProp>();
  const { cartItems, removeFromCart } = useCartStore();

  const total = cartItems.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  );

  const increaseQuantity = (id: number) => {
    const updated = cartItems.map((item) =>
      item.id === id ? { ...item, quantity: item.quantity + 1 } : item
    );
    useCartStore.setState({ cartItems: updated });
  };

  const decreaseQuantity = (id: number) => {
    const item = cartItems.find((i) => i.id === id);
    if (!item || item.quantity <= 1) return;

    const updated = cartItems.map((i) =>
      i.id === id ? { ...i, quantity: item.quantity - 1 } : i
    );
    useCartStore.setState({ cartItems: updated });
  };

  const handleGoBack = () => {
    navigation.goBack();
  };
const handleHomePress = () => {
  navigation.navigate('Home');
};

  

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Sepet</Text>

      <FlatList
        data={cartItems}
        keyExtractor={(item) => item.id.toString()}
        contentContainerStyle={styles.list}
        renderItem={({ item }) => (
          <View style={styles.itemContainer}>
            <Image source={{ uri: item.image }} style={styles.image} />
            <View style={styles.infoContainer}>
              <View style={styles.info}>
                <Text style={styles.name}>{item.title}</Text>
                <Text
                  style={styles.description}
                  numberOfLines={2}
                  ellipsizeMode="tail"
                >
                  {item.description}
                </Text>
              </View>

              <View style={styles.quantityContainer}>
                <NumericInput
                  value={item.quantity}
                  onIncrement={() => increaseQuantity(item.id)}
                  onDecrement={() => decreaseQuantity(item.id)}
                />

                <TouchableOpacity style={styles.backButton} onPress={handleGoBack}>
                  <Image
                    source={require('../../assets/img/back.png')}
                    style={styles.backIcon}
                  />
                </TouchableOpacity>

                <Text style={styles.price}>
                  {(item.price * item.quantity).toFixed(2)} TL
                </Text>
              </View>

              <TouchableOpacity
                onPress={() => removeFromCart(item.id)}
                style={styles.removeContainer}
              >
                <Text style={styles.remove}>Sil</Text>
              </TouchableOpacity>
            </View>
          </View>
        )}
      />

      <Footer price={total} onPress={handleHomePress} />
    </View>
  );
};

export default ShoppingCart;
