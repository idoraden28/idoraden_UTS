import * as React from 'react';
import { Image, StyleSheet, TouchableOpacity, } from 'react-native';
import { NavigationContainer, TabActions } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import { Text } from 'react-native';
import {
  ido
} from './assets'
import {
  HomeScreen,
  LoginScreen,
  RegisterScreen,
  SearchScreen,
  VideoScreen,
  StoreScreen,
  ProfileScreen,
  MessageScreen,
  EditScreen,
  SplashScreen
} from './pages'

const Stack = createNativeStackNavigator();
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
const Tab = createBottomTabNavigator();

const MainScreen = () => {
  return (
    <Tab.Navigator>

      <Tab.Screen name="Home" component={HomeScreen} options={{
        tabBarLabel: 'Home',
        tabBarIcon: ({ color }) => (<MaterialCommunityIcons name="home" color={color} size={26} />
        ),
      }} />
      <Tab.Screen name="search" component={SearchScreen} options={{
        tabBarLabel: 'Search',
        tabBarIcon: ({ color }) => (<MaterialCommunityIcons name="magnify" color={color} size={26} />
        ),
      }} />
      <Tab.Screen name="Video" component={VideoScreen} options={{
        tabBarLabel: 'Reels',
        tabBarIcon: ({ color }) => (<MaterialCommunityIcons name="movie-outline" color={color} size={26} />
        ),
      }} />
      <Tab.Screen name="Store" component={StoreScreen} options={{
        tabBarLabel: 'Store',
        tabBarIcon: ({ color }) => (<MaterialCommunityIcons name="shopping-outline" color={color} size={26} />
        ),
      }} />
      <Tab.Screen name="Profile" component={ProfileScreen} options={{
        tabBarLabel: 'Profile',
        tabBarIcon: ({ color }) => (<MaterialCommunityIcons name="account" color={color} size={26} />
        ),
      }} />
    </Tab.Navigator>
  )
}

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName='Splash'>
        <Stack.Screen name="Main" component={MainScreen} options={{ headerShown: false }} />
        <Stack.Screen name="Login" component={LoginScreen} options={{ headerShown: false }} />
        <Stack.Screen name="Register" component={RegisterScreen} options={{ headerShown: false }} />
        <Stack.Screen name="Message" component={MessageScreen} />
        <Stack.Screen name="Edit" component={EditScreen} />
        <Stack.Screen name="Splash" component={SplashScreen} options={{ headerShown: false }} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;