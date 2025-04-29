import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  
  container: {
    flex: 1,
    padding: 16,
    backgroundColor: '#fff',
    justifyContent: 'center',
    alignItems: 'center',
    position: 'relative',
  },

  title: {
    fontSize: 24,
    fontWeight: '700',
    color: '#000',
    textAlign: 'center',
    position: 'absolute',
    top: '10%',
  },

  //  favori yoksa gösterilecek görselin stili
  emptyImage: {
    width: 350,
    height: 380,
    marginBottom: 40,
  },

  // Favori yoksa gösterilen container
  emptyContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    position: 'relative', // 💡 bunu ekle
    flex: 1,              // 💡 ayrıca bu da gerekebilir
  },
  

  // FlatList için içerik stili
  listContainer: {
    paddingBottom: 36,
  },

  productCard: {
    width: '48%',
    marginBottom: 15,
    padding: 10,
    justifyContent: 'center', // HOme için verilen düzen de fav kayıyor ? yeni ayarlama yapmak ? 
    alignItems: 'center',
    position: 'relative',
  },

  // Geri butonu için konum ve boyutlandırma
  backButton: {
    position: 'absolute',
    top: 50,
    left: 10,
    zIndex: 1,
    width: 54,
    height: 45,
  },

  // Geri butonunun içindeki görsel için stil
  backIcon: {
    width: 54,
    height: 54,
  },

  button: {
    width: 300,
    height: 40,
    borderRadius: 30,
    backgroundColor: '#D63031',
    position: 'absolute',     
    bottom: 40,               // güncellendi
    alignSelf: 'center',
    zIndex: 2,                // eklendi
  }, 

  buttonText: {
    color: '#fff',
    fontSize: 14,
    fontWeight: 'bold',
    alignSelf: 'center',
    
    
  },
});

export default styles;
