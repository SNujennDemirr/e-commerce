import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
 footerContainer: {
  position: 'absolute',
  bottom: 40,
  width: '100%',
  height: 100,
  paddingTop: 24,
  paddingHorizontal: 16,
  paddingBottom: 32,
  flexDirection: 'row',
  justifyContent: 'space-between',
  alignItems: 'center',
  backgroundColor: '#fffff',
  borderTopWidth: 1,
  borderTopColor: '#ccc',
  zIndex: 10,
},

  priceContainer: {
    flex: 1,
    
  },
  priceText: {
    fontSize: 25,
    fontWeight: 'bold',
    color: '#000',
  
  },
   priceLabel: {
    fontSize: 12,
    color: 'black',
  },
  buttonContainer: {
    flexShrink: 0,
  },
  buyButton: {
    backgroundColor: '#D63031',
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 30,
    width:100,
    height:44,
    
  },
  buyButtonText: {
    color: '#fff',
    fontWeight: 'bold',
   textAlign:'center',
   
  },
});

export default styles;
