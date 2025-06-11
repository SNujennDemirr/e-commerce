import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  wrapper: {
    width: '100%',
    marginBottom: 20,
  },
  container: {
    width: '100%',
    height: 100,
    backgroundColor: '#fff',
    borderRadius: 10,
    marginTop: 0,
    justifyContent: 'center',
    position: 'relative',
  },
  input: {
    width: '100%',
    height: 75,
    top: 15,
    borderColor: '#ccc',
    borderWidth: 1,
    borderRadius: 13,
    paddingHorizontal: 15,
  },
  filterButton: {
    position: 'absolute',
    right: 10,
    top: 30,
    width: 40,
    height: 40,
    justifyContent: 'center',
    alignItems: 'center',
    zIndex: 10,    
    
  },
  filterIcon: {
    width: 30,
    height: 32,
  },
  clearButtonContainer: {
    flexDirection: 'row',
    justifyContent: 'flex-end',
    marginTop: 20,
    paddingHorizontal: 10,
  },
  clearButton: {
    borderRadius: 6,
    
  },
  clearText: {
    color: 'rgba(64, 50, 207, 1)',
    fontSize: 15,
    fontWeight: '500',
  },
});

export default styles;
