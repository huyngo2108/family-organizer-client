import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { PaperProvider } from 'react-native-paper';
import { ActivityIndicator, View } from 'react-native';
import theme from './src/theme/theme';
import { AuthProvider, useAuth } from './src/context/AuthContext';
import MainNavigator from './src/navigation/MainNavigator';
import AuthStack from './src/navigation/AuthStack';
import { TaskProvider } from './src/context/TaskContext'; 

function Gate() {
  const { user, loading } = useAuth();
  if (loading) {
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <ActivityIndicator />
      </View>
    );
  }
  return user ? <MainNavigator /> : <AuthStack />;
}

export default function App() {
  return (
    <PaperProvider theme={theme}>
      <AuthProvider>
        <TaskProvider>  
          <NavigationContainer>
            <Gate />
          </NavigationContainer>
        </TaskProvider>
      </AuthProvider>
    </PaperProvider>
  );
}
