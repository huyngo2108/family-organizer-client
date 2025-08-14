import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { PaperProvider } from 'react-native-paper';
import { ActivityIndicator, View } from 'react-native';
import MainNavigator from './src/navigation/MainNavigator';
import theme from './src/theme/theme';
import { AuthProvider, useAuth } from './src/context/AuthContext';
import LoginScreen from './src/screens/LoginScreen'; 

function Gate() {
  const { user, loading } = useAuth();
  if (loading) {
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <ActivityIndicator />
      </View>
    );
  }
  return user ? <MainNavigator /> : <LoginScreen />;
}

export default function App() {
  return (
    <PaperProvider theme={theme}>
      <AuthProvider>
        <NavigationContainer>
          <Gate />
        </NavigationContainer>
      </AuthProvider>
    </PaperProvider>
  );
}