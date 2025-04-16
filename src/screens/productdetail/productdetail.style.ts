import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    padding: 20,
    backgroundColor: '#fff',
  },
  backButton: {
    position: 'absolute',
    top: 80,
    left: 30,
    zIndex: 1,
    width: 44,
    height: 44,
  },
  backIcon: {
    width: 34,
    height: 34,
  },
  productImage: {
    width: '100%',
    height: 270,
    marginBottom: 20,
    marginTop: 40,
  },
  productTitle: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 10,
    color: '#333',
  },
  productDescription: {
    fontSize: 16,
    color: '#666',
    marginBottom: 20,
    lineHeight: 22,
  },
  productPrice: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#000',
    marginBottom: 20,
  },
});

export default styles;
