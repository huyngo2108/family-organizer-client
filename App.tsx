import React, { useEffect } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { PaperProvider, Button } from 'react-native-paper';
import { ActivityIndicator, View } from 'react-native';
import theme from './src/theme/theme';
import { AuthProvider, useAuth } from './src/context/AuthContext';
import MainNavigator from './src/navigation/MainNavigator';
import AuthStack from './src/navigation/AuthStack';
import { TaskProvider } from './src/context/TaskContext';
import { notifyNow, scheduleIn } from './src/services/localNotifications';

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

function DevNotifTest() {
  if (!__DEV__) return null;
  return (
    <View
      pointerEvents="box-none"
      style={{ position: 'absolute', bottom: 20, right: 16, left: 16, gap: 12 }}
    >
      <Button mode="contained" onPress={() => notifyNow('Test notification', 'Hello from DEV')}>
        Send NOW
      </Button>
      <Button mode="outlined" onPress={() => scheduleIn(10, 'Due soon', 'This fires after 10s')}>
        Schedule in 10s
      </Button>
    </View>
  );
}

export default function App() {
  useEffect(() => {
    if (__DEV__) {
      (async () => {
        try {
          const mod = await import('./src/services/localNotifications');
          mod?.initLocalNotifications?.();
        } catch {}
      })();
    }
  }, []);

  return (
    <PaperProvider theme={theme}>
      <AuthProvider>
        <TaskProvider>
          <NavigationContainer>
            <Gate />
          </NavigationContainer>
          <DevNotifTest />
        </TaskProvider>
      </AuthProvider>
    </PaperProvider>
  );
}
