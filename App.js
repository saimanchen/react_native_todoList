import { useContext } from 'react';
import TodoList from './src/screens/TodoList';
import Notes from './src/screens/Notes';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Ionicons } from '@expo/vector-icons';
import { ThemeContext, ThemeProvider } from './src/context/ThemeContext';

export default function App() {
  const Tab = createBottomTabNavigator();

  return (
    <ThemeProvider>
      <NavigationContainer>
        <Tab.Navigator
          screenOptions={{
            tabBarActiveBackgroundColor: '#bbb',
            tabBarInactiveBackgroundColor: '#bbb',
            tabBarInactiveTintColor: '#26263A',
            tabBarActiveTintColor: '#fff',
            tabBarShowLabel: false,
            tabBarStyle: {
              position: 'absolute',
              borderTopColor: '#bbb',
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
                    color={tabInfo.focused ? '#fff' : '#ccc'}
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
                    color={tabInfo.focused ? '#fff' : '#aaa'}
                  />
                );
              },
            }}
          />
        </Tab.Navigator>
      </NavigationContainer>
    </ThemeProvider>
    
  );
}
