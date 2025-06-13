import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  wrapper: {
    width: '100%',
    marginBottom: 10,
  },
  container: {
    width: '100%',
    height: 100,
    backgroundColor: '#fff',
    borderRadius: 10,
    marginTop: 0,
    justifyContent: 'flex-start',
    position: 'relative',
    paddingTop:20,
  },
  input: {
    width: '100%',
    height: 75,
    borderColor: 'rgba(231, 231, 231, 0.88)',
    borderWidth: 1,
    borderRadius: 15,
    paddingHorizontal: 15,
  },
  filterButton: {
    position: 'absolute',
    right: 10,
    top: 40,
    width: 45,
    height: 40,
    justifyContent: 'center',
    alignItems: 'center',
    zIndex: 10,
  },
  filterIcon: {
    width: 30,
    height: 30,
    resizeMode: 'contain',
  },
  clearButtonContainer: {
    flexDirection: 'row',
    justifyContent: 'flex-end',
    marginTop: 10,
    paddingHorizontal: 10,
  },
  clearButton: {
    borderRadius: 6,
    paddingHorizontal: 8,
    paddingVertical: 4,
  },
  clearText: {
    color: 'rgba(64, 50, 207, 1)',
    fontSize: 15,
    fontWeight: '500',
  },
});

export default styles;
