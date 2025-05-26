import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    height: 140,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    backgroundColor: '#fff',
    paddingHorizontal: 15,
    borderBottomWidth: 1,
    borderColor: '#ccc',
    paddingTop: 40, // üst boşluk (duruma göre ayarla)
  },
  leftIcon: {
    width: 24,
    height: 24,
  },
  title: {
    fontSize: 22,
    fontWeight: '700',
    color: 'black',
    textAlign: 'center',
    fontFamily: 'DM Sans',
    flex: 1,
  },
  rightIcon: {
    width: 30,
    height: 30,
  },
  sideContainer: {
    width: 40, // icon'lara sabit genişlik veriyoruz
    alignItems: 'center',
  },
});

export default styles;
