import React from 'react';
import { View, Text, StyleSheet, Platform } from 'react-native';

export const Header = () => (
  <View style={styles.header}>
    <Text style={styles.text}>TODO LIST</Text>
  </View>
);

const styles = StyleSheet.create({
  header: {
    height: Platform.OS === 'android' ? 76 : 100,
    marginTop: Platform.OS === 'ios' ? 0 : 24,
    ...Platform.select({
      ios: { backgroundColor: '#bbb', paddingTop: 24},
      android: { backgroundColor: '#ddd'}
    }),
    alignItems: 'center',
    justifyContent: 'center'
  },
  text: {
    color: '#fff',
    fontSize: 24
  }
});