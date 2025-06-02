import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  
  badge: {
    top:10,
    backgroundColor: 'red',
    borderRadius: 30,
    width: 20,
    height: 20,
    justifyContent: 'center',
    alignItems: 'center',
    
  },
  container: {
  flex: 1,
  position: 'relative',
  backgroundColor: '#fff',
  padding: 16,
},

  text: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: 13,
    textAlign: 'center',
  },
});

export default styles;
