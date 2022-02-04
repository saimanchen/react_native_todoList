import { View, Text, TextInput, TouchableOpacity } from 'react-native';
import React, { useState } from 'react';
import { globalStyles } from '../styles/globalStyles';

const AddItem = ({ addHandler }) => {
  const [text, setText] = useState('');
  const inputHandler = value => setText(value);

  return (
    <View style={globalStyles.addTask}>
      <View>
        <TextInput 
          style={globalStyles.input}
          placeholder='Add a new task'
          placeholderTextColor="#fff"
          onChangeText={inputHandler}
        />
      </View>
      <View>
        <TouchableOpacity 
          style={globalStyles.addButton}
          onPress={() => addHandler(text)}>
        <Text style={globalStyles.fontButton}>+</Text>
        </TouchableOpacity>
      </View>
      
    </View>
  );
};

export default AddItem;
