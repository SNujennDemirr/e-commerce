import React from 'react';
import { View, Text, FlatList, Image, TouchableOpacity } from 'react-native';
import styles from './shoppingcart.style';
import { useCartStore } from '../../store/cart';
import Footer from '../../components/footer/footer';
import Badge from '../../components/badge/Badge';

const ShoppingCart: React.FC = () => {
  const { cartItems, removeFromCart } = useCartStore();

  const total = cartItems.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  );

  const totalItems = cartItems.reduce((sum, item) => sum + item.quantity, 0);

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
                <Text style={styles.price}>₺{item.price * item.quantity}</Text>
              </View>

              <View style={styles.quantityContainer}>
                <TouchableOpacity
                  onPress={() => decreaseQuantity(item.id)}
                  style={styles.quantityButton}
                >
                  <Text style={styles.quantityText}>-</Text>
                </TouchableOpacity>

                <Text style={styles.quantityValue}>{item.quantity}</Text>

                <TouchableOpacity
                  onPress={() => increaseQuantity(item.id)}
                  style={styles.quantityButton}
                >
                  <Text style={styles.quantityText}>+</Text>
                </TouchableOpacity>
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

      {/* Sepetteki toplam ürün sayısını sol alt köşede badge olarak göster */}
      <View style={{ position: 'absolute', bottom: 16, left: 16 }}>
        <Badge count={totalItems} />
      </View>

      <Footer price={total} onPress={() => {}} />
    </View>
  );
};

export default ShoppingCart;
