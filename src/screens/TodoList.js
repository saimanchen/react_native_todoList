import {  SafeAreaView } from 'react-native'
import { globalStyles } from '../styles/globalStyles';
import Home from '../components/Home';

const TodoList = () => {
  
  return (
    <SafeAreaView style={globalStyles.container}>
      <Home />
    </SafeAreaView>
  )
}

export default TodoList
