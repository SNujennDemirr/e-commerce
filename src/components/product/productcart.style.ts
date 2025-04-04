import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  productCard: {
    width: 200,
    height: 300, 
    backgroundColor: '#F8F8F8',
    borderRadius: 10,
    padding: 10,
    marginBottom: 15,
    justifyContent: 'center',
    alignItems: 'center',
    position: 'relative',
  },
  priceButton: {
    position: 'absolute',
    top: 130, // Daha aşağı al
    left: '55%', // Ortaya hizala
    transform: [{ translateX: -50 }], // X ekseninde tam ortaya getir
    height: 35,
    width: 100,
    backgroundColor: '#FFFFFF',
    paddingVertical: 4,
    paddingHorizontal: 8,
    borderRadius: 8,
    alignItems: 'center',
    justifyContent: 'center',
    zIndex: 1,
    shadowColor: '#000',  
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  
  priceText: {
    fontSize: 18,
    fontWeight: 'bold',
    color: 'black',
  },
  productImage: {
    width: '100%',  
    height: 180, 
    resizeMode: 'contain',
  },
  productName: {
    fontSize: 14,
    fontWeight: 'bold',
    marginTop: 5,
  },
  productDescription: {
    fontSize: 15, 
    color: '#666',
    textAlign: 'center',
    marginVertical: 5,
  },
});
