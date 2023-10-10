import { StyleSheet } from 'react-native';

export const style = StyleSheet.create({
  background: {
    flex: 1,
  },
  container: {
    flex: 1,
    marginHorizontal: 10,
    justifyContent: 'center'
  },
  stocksContainer: {
    marginVertical: 20,
  },
  header: {
    color: '#F9F653',
    fontSize: 30,
    fontWeight: 'bold',
    marginVertical: 20,
  },
  item: {
    flexDirection: 'row',    
  },
  title: {
    color: '#B60691',
    fontWeight: 'bold',
    fontSize: 20,
  },
  value: {
    color: '#0FD7DF',
    fontSize: 20,
    paddingHorizontal: 5,
  }
});