import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { PaperProvider } from 'react-native-paper';

import MainNavigator from './src/navigation/MainNavigator';
import theme from './src/theme/theme';

export default function App() {
  return (
    <PaperProvider theme={theme}>
      <NavigationContainer>
        <MainNavigator />
      </NavigationContainer>
    </PaperProvider>
  );
}
