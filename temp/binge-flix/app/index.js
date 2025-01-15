// App.js
import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { createStackNavigator } from '@react-navigation/stack'
import SplashScreen from './screens/SplashScreen'
import HomeScreen from './screens/HomeScreen'
import SearchScreen from './screens/SearchScreen'
import DetailsScreen from './screens/DetailsScreen'

const Tab = createBottomTabNavigator()
const Stack = createStackNavigator()

const HomeStack = () => (
  <Stack.Navigator
    screenOptions={{
      headerStyle: {
        backgroundColor: '#000000', // Change header background color
      },
      headerTintColor: 'red', // Change header text/icons color
      headerTitleStyle: {
        fontWeight: 'bold',
      },
    }}
  >
    <Stack.Screen name='BINGE-FLIX' component={HomeScreen} />
    <Stack.Screen name='DETAILS' component={DetailsScreen} />
  </Stack.Navigator>
)

export default function index() {
  return (
    <Stack.Navigator
      initialRouteName='Splash'
      screenOptions={{ 
        headerShown: false,
        headerStyle: {
          backgroundColor: '#4A90E2', // Change header background color
        },
        headerTintColor: '#FFFFFF', // Change header text/icons color
      }}
    >
      <Stack.Screen name='Splash' component={SplashScreen} />
      <Stack.Screen name='Main'>
        {() => (
          <Tab.Navigator
            screenOptions={{
              headerShown: false,
              tabBarActiveTintColor: 'red', // Color for active tab
              tabBarInactiveTintColor: '#8E8E93', // Color for inactive tabs
              tabBarStyle: {
                backgroundColor: '#000000', // Tab bar background color
                borderTopColor: '#E5E5E5', // Border color
                paddingBottom: 5, // Add some padding at the bottom
                paddingTop: 5, // Add some padding at the top
              },
              tabBarLabelStyle: {
                fontSize: 12,
                fontWeight: '500',
              },
            }}
          >
            <Tab.Screen name='Home' component={HomeStack} />
            <Tab.Screen name='Search' component={SearchScreen} />
          </Tab.Navigator>
        )}
      </Stack.Screen>
    </Stack.Navigator>
  )
}