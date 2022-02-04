import { View, Text, SafeAreaView } from 'react-native';
import React, { useContext } from 'react';
import { globalStyles } from '../styles/globalStyles';
import { ThemeContext } from '../context/ThemeContext';

const Notes = () => {
  const {theme} = useContext(ThemeContext)
  return (
    <SafeAreaView style={globalStyles[`container${theme}`]}>
      <View style={globalStyles.container}>
        <Text style={globalStyles.textColor}>Notes</Text>
      </View>  
    </SafeAreaView>
  );
};

export default Notes;
