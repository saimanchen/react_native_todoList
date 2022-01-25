import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';

const TaskItem = ({ item, deleteHandler }) => {
  return (
    <View>
      <TouchableOpacity onPress={() => deleteHandler(item.id)}>
        <Text> {item.task} </Text>
      </TouchableOpacity>
    </View>
  )
}

export default TaskItem;
