import type { NativeStackNavigationProp } from '@react-navigation/native-stack';
import type { BottomTabNavigationProp } from '@react-navigation/bottom-tabs';

export type BottomTabParamList = {
  Home: undefined;
  AddTask: undefined;
  Search: undefined;
  Notification: undefined;
  Profile: undefined;
};

export type AuthStackParamList = {
  Onboarding: undefined;
  Login: undefined;
  Register: undefined;
  ForgotPassword: undefined;
};

export type AppStackParamList = {
  MainApp: undefined;
  Ranking: undefined;
};

export type AuthStackNavigation = NativeStackNavigationProp<AuthStackParamList>;
export type AppStackNavigation = NativeStackNavigationProp<AppStackParamList>;

export type RootStackParamList = AuthStackParamList & AppStackParamList;
export type RootStackNavigation = NativeStackNavigationProp<RootStackParamList>;
export type BottomTabNavigation = BottomTabNavigationProp<BottomTabParamList>;
