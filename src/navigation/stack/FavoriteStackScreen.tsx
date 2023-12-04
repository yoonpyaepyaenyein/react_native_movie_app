import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {NavigationContainer} from '@react-navigation/native';
import FavoriteScreen from '../../screens/favorite/FavoriteScreen';
import MovieDetailScreen from '../../screens/details/MovieDetailScreen';

const Stack = createNativeStackNavigator();

export default function FavoriteStackScreen() {
  return (
    <Stack.Navigator screenOptions={{headerShown: false}}>
      <Stack.Group>
        <Stack.Screen name="Favorite" component={FavoriteScreen} />
        <Stack.Screen name="MovieDetail" component={MovieDetailScreen} />
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
