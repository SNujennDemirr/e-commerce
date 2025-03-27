import { StyleSheet, Dimensions } from 'react-native';



const styles = StyleSheet.create({
  container: {
    width: '100%',  // SearchBar'ın uzunluğunu %100 yapıyoruz
    height: 100,  // SearchBar'ın yüksekliğini ekranın %8'ine ayarlıyoruz
    backgroundColor: '#fff',
    borderRadius: 10,
    marginTop: 0,  // Header ile arasındaki boşluğu tamamen kaldırıyoruz
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
    width: 24,
    height: 26,
    position: 'absolute',
    right: 20,
    top: 40,  // Icon'u ortalamak için
  
  },
});

export default styles;
