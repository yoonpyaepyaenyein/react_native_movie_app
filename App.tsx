import {View, Text} from 'react-native';
import React from 'react';
import {QueryClient, QueryClientProvider} from 'react-query';
import RootStackScreen from './src/navigation/stack/RootStackScreen';
import HomeTabNavigator from './src/navigation/tab/HomeTabNavigator';
import {NavigationContainer} from '@react-navigation/native';
import AppNavigator from './AppNavigator';

export default function App() {
  const queryClient = new QueryClient();

  return (
    <QueryClientProvider client={queryClient}>
      <AppNavigator />
    </QueryClientProvider>
  );
}
