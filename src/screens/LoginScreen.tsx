import React, { useState } from 'react';
import { View, Text, Alert } from 'react-native';
import { useTheme } from 'react-native-paper';
import { useNavigation } from '@react-navigation/native';
import { RootStackNavigation } from '../types';

import InputField from '../components/InputField';
import PrimaryButton from '../components/PrimaryButton';

import { useLoginScreenStyles } from '../styles/screens/LoginScreen.styles';
import api, { ensureServer } from '../services/api';

export default function LoginScreen() {
  const { colors } = useTheme();
  const styles = useLoginScreenStyles();
  const navigation = useNavigation<RootStackNavigation>();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = async () => {
    if (!email || !password) {
      Alert.alert('Missing Info', 'Please enter both email and password.');
      return;
    }

    try {
      await ensureServer();

      const res = await api.post('/auth/login', {
        email: email.trim(),
        password,
      });

      if (res.data?.success) {
        navigation.replace('MainApp');
      } else {
        Alert.alert('Login Failed', res.data?.message || 'Invalid email or password.');
      }
    } catch (err: any) {
      const status = err?.response?.status;
      const data = err?.response?.data;

      if (status === 401) {
        Alert.alert('Login Failed', 'Invalid email or password.');
      } else if (typeof status === 'number') {
        Alert.alert('Login Failed', data?.message || `Server error (${status}). Please try again.`);
      } else {
        Alert.alert('Login Failed', 'Network error. Please check server URL/port or HTTPS/ATS settings.');
      }
    }
  };

  return (
    <View style={[styles.container, { backgroundColor: colors.background }]}>
      <Text style={styles.appTitle}>Family Organizer</Text>
      <Text style={styles.subTitle}>Sign Up</Text>
      <Text style={styles.description}>
        Enter your email and password to sign up for this app
      </Text>

      <InputField
        label="Email"
        value={email}
        onChangeText={setEmail}
        keyboardType="email-address"
        autoCapitalize="none"
      />

      <InputField
        label="Password"
        value={password}
        onChangeText={setPassword}
        secureTextEntry
        autoCapitalize="none"
      />

      <PrimaryButton label="Continue" onPress={handleLogin} />
    </View>
  );
}
