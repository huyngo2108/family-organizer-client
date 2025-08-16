import React from 'react';
import { useAuth } from '../context/AuthContext';
import AuthStack from './AuthStack';
import MainNavigator from './MainNavigator';

export default function AppNavigator() {
  const { user, loading } = useAuth();
  if (loading) return null;
  return user ? <MainNavigator /> : <AuthStack />;
}
