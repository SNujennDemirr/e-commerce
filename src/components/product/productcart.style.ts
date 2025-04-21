import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  productCard: {
    width: 200,
    height: 330, 
    backgroundColor: '#F8F8F8',
    borderRadius: 10,
    padding: 10,
    marginBottom: 15,
    justifyContent: 'center',
    alignItems: 'center',
    position: 'relative',
  },

  favoriteIconContainer: {
    position: 'absolute',
    top: 10,
    right: 10, 
    zIndex: 10,
  },
  favoriteIcon: {
    width: 25,  //inactive --
    height: 25,
  },
  favoriteIconActive: {
    width:45,
    height:45,
  },
  
  favoriteIconInactive: {
    padding: 6,
    width: 45,
    height:40,
  },
  
 
  priceButton: {
    position: 'absolute',
    top: 150,
    left: '45%', 
    transform: [{ translateX: -50 }], 
    height: 35,
    width: 130,
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
    fontSize: 20,
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
    marginTop: 18,
  },
  productDescription: {
    fontSize: 15, 
    color: '#666',
    textAlign: 'center',
    marginVertical: 5,
  },
});