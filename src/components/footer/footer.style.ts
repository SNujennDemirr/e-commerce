import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
 footerContainer: {
   position: 'absolute',
  bottom: 0, // Footer'ı ekranın altına sabitle
  width: '105%', 
  height: 120, 
  paddingTop: 24,
  paddingHorizontal: 16, //sağsol bosluk
  paddingBottom: 32,
  flexDirection: 'row', //yan yana 
  justifyContent: 'space-between',
  alignItems: 'center',
  backgroundColor: '#fff',
  borderTopWidth: 1,
  borderTopColor: '#ccc',
  zIndex: 10, // sabit
  margin: 0, 
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
