import { StyleSheet, Dimensions } from 'react-native';

const { width, height } = Dimensions.get('window');

const styles = StyleSheet.create({
  container: {
    height: 120,  // Header'ın yüksekliği
    flexDirection: 'row',
    justifyContent: 'space-between', // İkonları sağa ve sola yerleştirir
    alignItems: 'center', // Yükseklik açısından ortalar
    backgroundColor: '#fff',
    paddingHorizontal: 15,
    borderBottomWidth: 1,
    borderColor: '#ccc',
    marginTop: 20,
  },
  title: {
    fontSize: 25,  // Başlık boyutu
    fontWeight: '700',
    color: 'black',
    textAlign: 'center', // Başlığı ortalar
    fontFamily: 'DM Sans',
    flex: 1, // Başlık alanını doldurur
  },
  cartIcon: {
    width: 24,
    height: 24,
  },
  vectorIcon: {
    width: 24,
    height: 24,
    position: 'absolute', // Vector icon'u absolute konumlandırıyoruz
    left: 15,
    bottom: 40,
  },
});

export default styles;
