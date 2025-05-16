import { StyleSheet, Dimensions } from 'react-native';
const { width } = Dimensions.get('window');

export default StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    backgroundColor: '#fff',
    marginTop: 14,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    padding: 36,
    textAlign: 'center',
  },
    footerFixed: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    backgroundColor: 'white', // Eğer footer şeffaf görünüyorsa bu şart
  },
  list: {
    paddingBottom: 100,
  },
  itemContainer: {
    width: width * 0.9,
    minHeight: 230,
    borderWidth: 2,
    borderColor: '#4032CF',
    borderRadius: 16,
    alignSelf: 'center',
    marginTop: 15,
    paddingHorizontal: 16,
    paddingVertical: 12,
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#f9f9ff',
  },
  image: {
    width: 100,
    height: 120,
    marginRight: 16,
    borderRadius: 8,
    alignSelf: 'center',
    
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
    marginTop: 6,
    color: '#666',
    fontSize: 15,
  },
  quantityContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-start',
    marginTop: 10,
  },
  quantityButton: {
    width: 40,
    height: 40,
    borderRadius:5,
    backgroundColor:'rgba(237, 237, 237, 0.92)',
    justifyContent: 'center',
    alignItems: 'center',
    borderColor:'black',
   
  },
  quantityText: {
    color: 'black',
    fontSize: 18,
  },
  quantityValue: {
    marginHorizontal: 12,
    fontSize: 16,
    fontWeight: '500',
  },
  removeContainer: {
    position: 'absolute',
    right: 20,
    bottom: -17,
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
