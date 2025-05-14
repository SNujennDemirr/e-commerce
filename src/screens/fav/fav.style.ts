import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  
  container: {
    flex: 1,
    paddingTop: 130,
    backgroundColor: '#fff',
    justifyContent: 'center',
    alignItems: 'center',
    position: 'relative',
  },

  title: {
    fontSize: 20,
    fontWeight: '700',
    color: '#000',
    textAlign: 'center',
    position: 'absolute',
    top: '10%',
  },


  emptyImage: {
    width: 300,
    height: 300,
   
  },
  favText: {
    fontSize: 24,
    fontWeight: '700',
    color: '#000',
    marginBottom:18,
    
  
  },
  imgText: {
   fontSize: 16,      
   textAlign: 'center',
   color:'#666666',
  
  },

  // Favori yoksa gösterilen container
  emptyContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    position: 'relative',
    flex: 1,              
  },
  
  

  // FlatList için içerik stili
  listContainer: {
    paddingBottom: 36,
  },

  // Geri butonu için konum ve boyutlandırma
  backButton: {
    position: 'absolute',
    top: '9%',
    left: 10,
    zIndex: 1,
    width: 54,
    height: 55,
  },

  // Geri butonunun içindeki görsel için stil
  backIcon: {
    width: 54,
    height: 54,
  },

  button: {
    width: 300,
    height: 50,
    borderRadius: 30,
    backgroundColor: '#D63031',
    position: 'absolute',     
    bottom: 50,               
    alignSelf: 'center',
    justifyContent:'center' ,
    zIndex: 2,          
  }, 

  buttonText: {
    color: '#fff',
    fontSize: 18,
    alignSelf: 'center',

  },



  // productCard: {
  //   width: '48%',
  //   padding: 10,
  //   justifyContent: 'center', // HOme için verilen düzen de fav kayıyor ? yeni ayarlama yapıldı ? ------
  //   alignItems: 'center',
   
  // },
  
});

export default styles;
