import {View, Text} from 'react-native';
import React from 'react';
import {QueryClient, QueryClientProvider} from 'react-query';
import RootStackScreen from './src/screens/RootStackScreen';

export default function App() {
  const queryClient = new QueryClient();

  return (
    <QueryClientProvider client={queryClient}>
      <RootStackScreen />
    </QueryClientProvider>
  );
}
