import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    backgroundColor: '#fff',
    justifyContent: 'center',
    alignItems: 'center',
    position:'relative',
  },
  title: {
    fontSize: 24,
    fontWeight: '700',
    marginTop: 50,
    marginBottom:20,
    color: '#000',
   
  },
  
  emptyImage: {
    
  },
  emptyContainer: {
    justifyContent:'center',
    alignItems:'center',
  },
  listContainer: {
    paddingBottom: 36,
    
  
  },
  productCard: {
    width: '48%', 
    marginBottom: 15,
    padding: 10,
    
    justifyContent: 'center',
    alignItems: 'center',
    position: 'relative'
  },
  backButton: {
    position: 'absolute',
    top: 50,
    left: 10,
    zIndex: 1,
    width: 54,
    height: 45,
  },
  backIcon: {
    width: 54,
    height: 54,
  },
});

export default styles;
