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
    right: 10,
    top: 20, 
    
  
  },
  clearButtonContainer: {
    flexDirection: 'row',
    justifyContent: 'flex-end',
    marginTop: 5,
    paddingHorizontal: 10,
  },
  clearButton: {

    borderRadius: 6,
    paddingHorizontal: 8,
    paddingVertical: 4,
  },
  clearText: {
    color: 'rgba(64, 50, 207, 1)',
    fontSize: 15,
    fontWeight: '500',
  },
wrapper: {
  width: '100%',
  marginBottom: 20, // alt boşluk veriyoruz
  color:'red'
},
modalOverlay: {
  flex: 1,
  backgroundColor: 'rgba(0,0,0,0.4)',
  justifyContent: 'center',
  alignItems: 'center',
},

modalContent: {
  width: '80%',
  backgroundColor: 'red',
  borderRadius: 10,
  padding: 20,
  elevation: 10,
  justifyContent:'center',
  alignItems:'center',
  
},

modalTitle: {
  fontSize: 18,
  fontWeight: 'bold',
  marginBottom: 10,
},

});

export default styles;
