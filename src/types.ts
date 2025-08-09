import type { NativeStackNavigationProp } from '@react-navigation/native-stack';
import type { BottomTabNavigationProp } from '@react-navigation/bottom-tabs';

  export type BottomTabParamList = {
    Home: undefined;
    AddTask: undefined;
    Search: undefined;
    Notification: undefined;
    Profile: undefined;
  };

  export type RootStackParamList = {
    Onboarding: undefined;
    Login: undefined;
    Register: undefined;
    ForgotPassword: undefined;
    MainApp: undefined; 
    Ranking: undefined;
  };
export type RootStackNavigation = NativeStackNavigationProp<RootStackParamList>;
export type BottomTabNavigation = BottomTabNavigationProp<BottomTabParamList>;