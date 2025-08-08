import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import BottomTabNavigator from './BottomTabNavigator';
import LoginScreen from '../screens/LoginScreen';
import RegisterScreen from '../screens/RegisterScreen';
import ForgotPasswordScreen from '../screens/ForgotPassword';
import OnboardingScreen from '../screens/OnboardingScreen';
import NotificationScreen from '../screens/NotificationScreen';
import CreateTaskScreen from '../screens/CreateTaskScreen';
import RankingScreen from '../screens/RankingScreen';

const Stack = createNativeStackNavigator();

export default function MainNavigator() {
  return (
    <Stack.Navigator initialRouteName="Onboarding" screenOptions={{ headerShown: false }}>
      <Stack.Screen name="Onboarding" component={OnboardingScreen} />
      <Stack.Screen name="Login" component={LoginScreen} />
      <Stack.Screen name="Register" component={RegisterScreen} />
      <Stack.Screen name="ForgotPassword" component={ForgotPasswordScreen} />
      <Stack.Screen name="MainApp" component={BottomTabNavigator} />
      <Stack.Screen name="Notification" component={NotificationScreen} />
      <Stack.Screen name="CreateTask" component={CreateTaskScreen} />
      <Stack.Screen name="Ranking" component={RankingScreen} />
    </Stack.Navigator>
  );
}
