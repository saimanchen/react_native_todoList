import { useState } from 'react';
import { StyleSheet, Text, View, SafeAreaView, FlatList } from 'react-native';
import TodoList from './src/screens/TodoList';
import Notes from './src/screens/Notes';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Ionicons } from '@expo/vector-icons';

export default function App() {

  const [tasks, setTasks] = useState([
    { task: 'decide what kind of app to do', id: 1 },
    { task: "let's do a todo app", id: 1 },
    { task: 'start making it', id: 1 },
    { task: 'make it better', id: 1 },
    { task: 'finish it', id: 1 },
  ]);
  
  const Tab = createBottomTabNavigator();

  return (
    <NavigationContainer>
        <Tab.Navigator
          screenOptions={{
            style: {
              borderTopColor: '#26263A',
            },
            tabBarActiveBackgroundColor: '#26263A',
            tabBarInactiveBackgroundColor: '#32324C',
            tabBarInactiveTintColor: '#26263A',
            tabBarActiveTintColor: '#fff',
            tabBarStyle: {
              position: 'absolute',
              borderTopColor: '#26263A',
            },
            
            headerShown: false,
          }}
        >
          <Tab.Screen 
            name="Tasks" 
            component={TodoList}
            options={{
              tabBarIcon: (tabInfo) => {
                return (
                  <Ionicons
                    name="list"
                    size={24}
                    color={tabInfo.focused ? "#fff" : "'#26263A'"}
                  />
                );
              },
            }}
          />
          <Tab.Screen 
            name="Notes" 
            component={Notes}
            options={{
              tabBarIcon: (tabInfo) => {
                return (
                  <Ionicons
                    name="journal"
                    size={24}
                    color={tabInfo.focused ? "#fff" : '#26263A'}
                  />
                );
              },
            }}
          />
        </Tab.Navigator>
    </NavigationContainer>
  );
}
