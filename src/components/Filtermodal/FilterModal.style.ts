import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  backdrop: {
    flex: 1,
    backgroundColor: 'rgba(0,0,0,0.4)', // Yarı saydam koyu arka plan
    justifyContent: 'flex-end',         
  },
  modalContainer: {
    backgroundColor: '#fff',
    padding: 20,
    borderTopLeftRadius: 16,
    borderTopRightRadius: 16,
    height: 400,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: -3 },
    shadowOpacity: 0.1,
    shadowRadius: 8,
    elevation: 10,
  },
  handle: {
    width: 110,
    height: 5,
    backgroundColor: 'rgba(0, 0, 0, 1)',
    borderRadius: 3,
    alignSelf: 'center',
    marginBottom: 15,
  },
  title: {
    fontSize: 20,
    fontWeight: '600',
    marginBottom: 20,
    textAlign: 'center',
    color: 'rgba(214, 48, 49, 1)',
  },
  input: {
    borderWidth: 1,
    borderColor: '#ddd',
    borderRadius: 15,
    paddingHorizontal: 15,
    paddingVertical: 12,
    fontSize: 16,  
    marginBottom: 15,
  },
  
applyButton: {
  backgroundColor: 'rgba(214, 48, 49, 1)',
  paddingVertical: 14,
  borderRadius: 30,
  alignItems: 'center',
  width: 160,
  position: 'absolute',  // Konumlandırma için gerekli
  bottom: 20,            // Ekranın altından 20 birim yukarıda
  right: 20,             // Ekranın sağından 20 birim içeride
},
applyText: {
  color: '#fff',
  fontSize: 16,
  fontWeight: '600',
},




  



  




});

export default styles;
