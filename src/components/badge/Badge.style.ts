import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  
  badge: {
    backgroundColor: 'red',
    borderRadius: 12,
    width: 30,
    height: 24,
    paddingHorizontal: 6,
    justifyContent: 'center',
    alignItems: 'center',
    elevation: 4, // Android shadow
    shadowColor: '#000', // iOS shadow
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.3,
    shadowRadius: 2,
  },
  container: {
  flex: 1,
  position: 'relative', // Bu şart!
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
