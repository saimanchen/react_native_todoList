import { useState } from 'react';
import { StyleSheet, Text, View, SafeAreaView, FlatList } from 'react-native';
import TodoList from './src/screens/TodoList';

export default function App() {

  const [tasks, setTasks] = useState([
    { task: 'decide what kind of app to do', id: 1 },
    { task: "let's do a todo app", id: 1 },
    { task: 'start making it', id: 1 },
    { task: 'make it better', id: 1 },
    { task: 'finish it', id: 1 },
  ]);

  return (
    <SafeAreaView style={styles.container}>
      <TodoList />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
