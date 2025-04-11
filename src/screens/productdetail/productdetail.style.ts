// productdetail.style.ts
import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },
  backButton: {
    position: 'absolute',
    top: 40,
    left: 10,
    zIndex: 1, 
  },
  backIcon: {
    width: 40,
    height: 40,
  },
  productTitle: {
    fontSize: 24,
    fontWeight: 'bold',
    marginVertical: 20,
  },
  productImage: {
    width: '100%',
    height: 200,
    resizeMode: 'contain',
    marginTop: 60 ,
  },
});

export default styles;
