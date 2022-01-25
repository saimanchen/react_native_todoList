import React, { useState } from 'react'
import { View, Text, FlatList } from 'react-native'
import TaskItem from '../components/TaskItem';

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
  }

  return (
    <View>
      {/* Header */}
      {/* form */}
      <View>
        <FlatList
          data={tasks}
          keyExtractor={(item) => item.id}
          renderItem={({ item }) => (
            <TaskItem item={item} deleteHandler={deleteHandler}/>
          )}
        />
      </View>
      
      
    </View>
  )
}

export default TodoList
