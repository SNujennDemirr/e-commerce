import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  backdrop: {
    flex: 1,
    backgroundColor: 'rgba(0,0,0,0.5)', // Yarı saydam karartma
    justifyContent: 'flex-end',         // Alttan kayma için
  },
  modalContainer: {
    backgroundColor: 'white',
    padding: 20,
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    maxHeight: '50%', // Sayfanın yarısına kadar kaplar
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  closeButton: {
    marginTop: 20,
  },
  closeText: {
    color: 'blue',
    fontSize: 16,
  },
});

export default styles;
