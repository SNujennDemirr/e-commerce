import { StyleSheet, Dimensions } from 'react-native';
const { width } = Dimensions.get('window');

export default StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    backgroundColor: 'rgb(255, 255, 255)',
    marginTop: 14,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    padding: 20,
    textAlign: 'center',
   

  },
  footerFixed: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    backgroundColor: 'white',
  },
  list: {
    paddingBottom: 100,
  },
  itemContainer: {
    minHeight: 230,
    borderWidth: 1,
    borderColor: '#4032CF',
    borderRadius: 10,
    alignSelf: 'center',
    marginTop: 15,
    paddingHorizontal: 16,
    paddingVertical: 12,
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: 'rgba(255, 255, 255, 1)',
  },
  image: {
    width: 100,
    height: 140,
    marginRight: 16,
    borderRadius: 8,
    alignSelf: 'center',
    bottom:10,
  },
  infoContainer: { 
    flex: 1,
    justifyContent: 'space-between',
  },
  info: {
    marginBottom: 8,
  },
  name: {
    fontSize: 16,
    fontWeight: '600',
  
  },
  description: {
    color: '#666666',
    fontSize: 14,
    marginTop: 4,
  },
  price: {
  marginTop: 16,
  color: 'rgb(0, 0, 0)',
  fontSize: 14,
  fontFamily: 'DMSans',
  fontWeight:'bold',
},

  quantityContainer: {
    marginTop: 10,

  },
  
  removeContainer: {
    position: 'absolute',
    right: 10,
    bottom: -17,
  },

backButton: {
  position: 'absolute',
  top: 30, 
  left: 10,
  zIndex: 10,
   width: 50,
  height: 50,
  padding: 8,
},

backIcon: {
  width: 50,
  height: 50,
  resizeMode: 'contain',
},

  remove: {
    color: '#4032CF',
    fontSize: 14,
  },
  totalContainer: {
    position: 'absolute',
    left: 20,
    bottom: 20,
  },
  totalText: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#000',
  },
});
