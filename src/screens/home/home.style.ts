import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 10,
    backgroundColor:'#FFFFFF'

  },
  
  customText: {
    fontFamily: 'DM Sans',
    fontWeight: '700',
    fontSize: 16,
   
    textAlign: 'center',
    flex: 1,
  },
  
  productsContainer: {
    flex:1,
    flexDirection: 'row',
    marginTop: 20,
  },
  loadingContainer: {
    flexDirection: 'row',
  },
});

export default styles;