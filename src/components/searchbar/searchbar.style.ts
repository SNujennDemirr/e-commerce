import { StyleSheet, Dimensions } from 'react-native';



const styles = StyleSheet.create({
  container: {
    width: '100%', 
    height: 100,  
    backgroundColor: '#fff',
    borderRadius: 10,
    marginTop: 0,  
    justifyContent: 'center',
    paddingHorizontal: 15,
    position: 'relative',
  },
  input: {
    width: '100%',  
    height: 70,
    borderColor: '#ccc',
    borderWidth: 1,
    borderRadius: 10,
    paddingHorizontal: 15,
    
  },
  filterIcon: {
    width: 30,
    height: 30,
    position: 'absolute',
    right: 20,
    top: 35, 
  
  },
});

export default styles;
