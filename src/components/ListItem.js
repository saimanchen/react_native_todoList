import React, { useContext } from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { globalStyles } from '../styles/globalStyles';

const ListItem = ({ item, deleteHandler }) => {
  return (
    <View style={globalStyles.itemContainer}>
      <TouchableOpacity 
        style={globalStyles.item}
        onLongPress={() => deleteHandler(item.key)}>
        <Text style={globalStyles.textColor}> {item.task} </Text>            
      </TouchableOpacity>
    </View>
  )
}

export default ListItem;
