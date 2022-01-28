import { StyleSheet } from 'react-native';

export const globalStyles = StyleSheet.create({
  container: {
    borderWidth: 1,
    flex: 1,
    backgroundColor: '#26263A',
    alignItems: 'center',
    justifyContent: 'center',
  },
  itemContainer: {
    // borderWidth: 1,
    width: 320,
    alignItems: 'center',
    justifyContent: 'center',
  },
  itemList:{
    flex: 1,
  },
  item: {
    width: '100%',
    margin: 5,
    padding: 20,
    borderWidth: 1,
    borderEndWidth: 2,
    borderBottomWidth: 2,
    borderRadius: 5,
    borderColor: '#fff',
  },
  textColor: {
    color: '#fff'
  },
  addTask: {
    // borderWidth: 1,
    paddingTop: 50,
    flexDirection: 'row',
    alignItems: 'baseline',
    marginBottom: 20,
  },
  input: {
    // borderWidth: 1,
    paddingLeft: 5,
    width: 270,
    color: '#fff',
  },
  addButton: {
    // borderWidth: 1,
    paddingRight: 5,
    alignItems: 'flex-end',
    width: 30,
    height: 30,
  },
  fontButton: {
    color: '#fff',
    fontSize: 24,
    fontWeight: 'bold',
  }
}) 