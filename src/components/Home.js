import React, { useState, useEffect, useContext } from 'react'
import { View, FlatList, SafeAreaView, Alert, TouchableOpacity } from 'react-native'
import { Header } from './Header';
import AddItem from './AddItem';
import ListItem from './ListItem';
import { globalStyles } from '../styles/globalStyles';
import { Icon } from 'react-native-elements';
// AsyncStorage
import AsyncStorage from "@react-native-async-storage/async-storage";
// context
import { ThemeContext } from '../context/ThemeContext';




const Home = () => {
  useEffect(() => {
    getData();
  }, [tasks]);

  const [tasks, updateTasks] = useState(
    [
      { task: 'decide what kind of app to do', key: 1 },
      { task: "let's do a todo app", key: 2 },
      { task: 'start making it', key: 3 },
      { task: 'make it better', key: 4 },
      { task: 'finish it', key: 5 },
    ]
  );

  // store data with AsyncStorage
  const storeData = async (value) => {
    try {
      const jsonValue = JSON.stringify(value);
      await AsyncStorage.setItem("@storage_Key", jsonValue);
    } catch (e) {
      console.log(e);
    }
  
  };

  // get data with AsyncStorage
  const getData = async () => {
    try {   
      const jsonValue = await AsyncStorage.getItem("@storage_Key");  
      return jsonValue != null ? updateTasks(JSON.parse(jsonValue)) : null;    
    } catch (e) {
      console.log(e);
    }  
  }

  // delete task func
  const deleteHandler = key => {
    const newTasks = tasks.filter((task) => task.key !== key);
    updateTasks(newTasks);
    storeData(newTasks);
  };

  // add task func
  const addHandler = text => { 
    if(text.length > 0) {
      return (
        updateTasks(prevTasks => [{ task: text, key: Math.random().toString() }, ...prevTasks]),
        storeData([{ task: text, key: Math.random().toString() }, ...tasks])
      )
    } else {
      Alert.alert(
        'Empty task', 
        'You have to enter at least 1 character :)',
        [{ text: 'OK' }])
    }
  }

  // 
  const ToggleHandler = () => {
    const { toggleTheme } = useContext(ThemeContext);
    return (
      <View>
        <TouchableOpacity onPress={() => toggleTheme()}>
          <Icon 
            name='color-fill-outline'
            type='ionicon'
            color='#fff'
          />
        </TouchableOpacity>
      </View>
    );
  }

  // context 
  const {theme} = useContext(ThemeContext)

  return (
    <SafeAreaView style={globalStyles[`container${theme}`]}>
      {/* header - platform specific */}
      {/* <Header /> */}
      <View style={globalStyles.container}>
        <View style={globalStyles.paintContainer}>
          <ToggleHandler />
          <AddItem addHandler={addHandler}/>
        </View>      
        
        <View style={globalStyles.itemList}>
          <FlatList
            data={tasks}
            renderItem={({ item }) => (
              <ListItem item={item} deleteHandler={deleteHandler}/>
            )}
          />
        </View>
      </View>
    </SafeAreaView>
  )
}

export default Home