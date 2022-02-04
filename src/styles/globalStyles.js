import { StyleSheet } from 'react-native';

export const globalStyles = StyleSheet.create({
  containerGreen: {
    flex: 1,
    width: '100%',
    backgroundColor: '#30DD8D',
  },
  containerBlue: {
    flex: 1,
    width: '100%',
    backgroundColor: '#5fbcbf',
  },
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  paintContainer: {
    paddingTop: 40,
    width: 320,
    flexDirection: 'row',
    justifyContent: 'center',
  },
  itemContainer: {
    flexDirection: 'row',
    width: 320,
    alignItems: 'center',
    justifyContent: 'center',
  },
  itemList:{
    flex: 1,
  },
  item: {
    flexDirection: 'row',
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
    flexDirection: 'row',
    alignItems: 'baseline',
    marginBottom: 20,
  },
  input: {
    paddingHorizontal: 25,
    marginRight: 10,
    width: 270,
    color: '#fff',
  },
  addButton: {
    paddingRight: 5,
    alignItems: 'flex-end',
    width: 30,
    height: 30,
  },
  fontButton: {
    color: '#fff',
    fontSize: 24,
    fontWeight: 'bold',
  },
}) 