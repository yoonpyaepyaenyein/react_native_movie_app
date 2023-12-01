import {View, Text} from 'react-native';
import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {NavigationContainer} from '@react-navigation/native';
import HomeScreen from './home/HomeScreen';
import PopularMovieScreen from './popualr/PopularMovieScreen';
import SearchMovieScreen from './search/SearchMovieScreen';

const Stack = createNativeStackNavigator();

export default function RootStackScreen() {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{headerShown: false}}>
        <Stack.Group>
          <Stack.Screen name="Home" component={HomeScreen} />
          <Stack.Screen name="Popular" component={PopularMovieScreen} />
          <Stack.Screen name="Search" component={SearchMovieScreen} />
        </Stack.Group>
      </Stack.Navigator>
    </NavigationContainer>
  );
}
