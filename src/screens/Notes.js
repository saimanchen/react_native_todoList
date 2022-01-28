import { View, Text, SafeAreaView } from 'react-native';
import React from 'react';
import { globalStyles } from '../styles/globalStyles';

const Notes = () => {
  return (
    <SafeAreaView style={globalStyles.container}>
      <Text>Notes</Text>
    </SafeAreaView>
  );
};

export default Notes;
