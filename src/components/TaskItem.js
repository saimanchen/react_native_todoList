import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { globalStyles } from '../styles/globalStyles';

const TaskItem = ({ item, deleteHandler }) => {
  return (
    <View style={globalStyles.itemContainer}>
      <TouchableOpacity 
        style={globalStyles.item}
        onLongPress={() => deleteHandler(item.id)}>
        <Text style={globalStyles.textColor}> {item.task} </Text>
      </TouchableOpacity>
    </View>
  )
}

export default TaskItem;
