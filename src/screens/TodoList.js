import React, { useState } from 'react'
import { View, Text, FlatList, SafeAreaView, Alert } from 'react-native'
import AddTask from '../components/AddTask';
import TaskItem from '../components/TaskItem';
import { globalStyles } from '../styles/globalStyles';

const TodoList = () => {
  const [tasks, updateTasks] = useState([
    { task: 'decide what kind of app to do', id: 1 },
    { task: "let's do a todo app", id: 2 },
    { task: 'start making it', id: 3 },
    { task: 'make it better', id: 4 },
    { task: 'finish it', id: 5 },
  ]);

  const deleteHandler = id => {
    updateTasks(prevTasks =>  prevTasks.filter(task => task.id != id))
  };

  const addHandler = text => {
    if(text.length > 0) {
      updateTasks(prevTasks => {
      return [ { task: text, id: Math.random().toString() }, ...prevTasks ];
      })
    } else {
      Alert.alert(
        'Empty task', 
        'You have to enter at least 1 character :)',
        [{ text: 'OK' }])
    }
    
  }

  return (
    <SafeAreaView style={globalStyles.container}>
      {/* Header */}
      <AddTask addHandler={addHandler}/>
      <View style={globalStyles.itemList}>
        <FlatList
          data={tasks}
          keyExtractor={(item) => item.id}
          renderItem={({ item }) => (
            <TaskItem item={item} deleteHandler={deleteHandler}/>
          )}
        />
      </View>
      
      
    </SafeAreaView>
  )
}

export default TodoList
