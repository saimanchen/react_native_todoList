import React, { useState, useEffect } from 'react'
import { View, FlatList, SafeAreaView, Alert } from 'react-native'
import { globalStyles } from '../styles/globalStyles';
import Home from '../components/Home';

// AsyncStorage
import AsyncStorage from "@react-native-async-storage/async-storage";
import AppLoading from 'expo-app-loading';


const TodoList = () => {
  
  return (
    <SafeAreaView style={globalStyles.container}>
      <Home />
    </SafeAreaView>
  )
}

export default TodoList
