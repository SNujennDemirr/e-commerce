// src/screens/productdetail/productdetail.style.ts
import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    alignItems: 'center',
    backgroundColor: '#fff',
  },
  productImage: {
    width: 200,
    height: 200,
    marginBottom: 20,
  },
  productName: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  productDescription: {
    fontSize: 16,
    color: '#777',
    marginBottom: 10,
  },
  productPrice: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#e74c3c',
  },
});

export default styles;
