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
  emptyText: {
    fontSize: 16,
    color: '#666',
    marginTop: 20,
    textAlign: 'center',
  },
  listContainer: {
    paddingBottom: 36,
    
  
  },
  productCard: {
    width: '48%', // Kart genişliğini %48'e ayarladık, böylece 2 sütun oluşturulacak
    marginBottom: 15, // Kartlar arasında boşluk
    padding: 10,
    
    justifyContent: 'center',
    alignItems: 'center',
    position: 'relative'
  },
});

export default styles;
