import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  productDescription: {
    fontFamily: 'DM Sans', 
    fontSize: 15, 
    letterSpacing: 0, 
    color: '#666',
    textAlign: 'center',
    marginVertical: 5,
  },
  productCard: {
    width: 200,
    height: 300, 
    backgroundColor: '#F8F8F8',
    borderRadius: 10,
    padding: 10,
    marginBottom: 15,
    justifyContent: 'center',
    alignItems: 'center',
    
  },
  productImage: {
    width: '80%',  
    height: 170, 
    resizeMode: 'contain',
  },
  productName: {
    fontSize: 14,
    fontWeight: 'bold',
    marginTop: 5,
  },
  productPrice: {
    fontSize: 12,
    color: 'gray',
    marginTop: 3,
  },
});
