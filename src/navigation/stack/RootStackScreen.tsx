import {View, Text} from 'react-native';
import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {NavigationContainer} from '@react-navigation/native';
import HomeScreen from '../../screens/home/HomeScreen';
import PopularMovieScreen from '../../screens/popualr/PopularMovieScreen';
import SearchMovieScreen from '../../screens/search/SearchMovieScreen';
import SearchDetailScreen from '../../screens/details/MovieDetailScreen';

const Stack = createNativeStackNavigator();

export default function RootStackScreen() {
  return (
    <Stack.Navigator screenOptions={{headerShown: false}}>
      <Stack.Group>
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="Popular" component={PopularMovieScreen} />
        <Stack.Screen name="Search" component={SearchMovieScreen} />
        <Stack.Screen name="MovieDetail" component={SearchDetailScreen} />
      </Stack.Group>
      {/* <Stack.Group
          screenOptions={{
            presentation: 'transparentModal',
            headerShown: false,
          }}> */}
      {/* <Stack.Screen name="loadingModal" component={LoadingModal} /> */}
      {/* </Stack.Group> */}
    </Stack.Navigator>
  );
}
