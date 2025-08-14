import React, { useState } from 'react';
import { View, Text, Alert } from 'react-native';
import { useTheme } from 'react-native-paper';

import InputField from '../components/InputField';
import PrimaryButton from '../components/PrimaryButton';

import { useRegisterScreenStyles } from '../styles/screens/RegisterScreen.styles';
import { useAuth } from '../context/AuthContext';

export default function RegisterScreen() {
  const { colors } = useTheme();
  const styles = useRegisterScreenStyles();
  const { register } = useAuth();
  const [email, setEmail] = useState('');
  const [username, setUsername] = useState('');
  const [fullName, setFullName] = useState('');
  const [password, setPassword] = useState('');

  const handleRegister = async () => {
    if (!email || !username || !password) {
      Alert.alert('Missing Info', 'Please enter Email, Username and Password.');
      return;
    }
    try {
      await register(email.trim(), username.trim(), password, fullName.trim() || undefined);
    } catch (e: any) {
      const msg =
        e?.message === 'EMAIL_TAKEN'
          ? 'Email already exists'
          : e?.message === 'USERNAME_TAKEN'
          ? 'Username already exists'
          : 'Server or network error. Please try again.';
      Alert.alert('Register Failed', msg);
    }
  };

  return (
    <View style={[styles.container, { backgroundColor: colors.background }]}>
      <Text style={styles.title}>Family Organizer</Text>
      <Text style={styles.subtitle}>Create an account</Text>
      <Text style={styles.description}>Enter email and password to create account</Text>

      <InputField
        label="Email"
        value={email}
        onChangeText={setEmail}
        autoCapitalize="none"
        keyboardType="email-address"
      />
      <InputField
        label="Username"
        value={username}
        onChangeText={setUsername}
        autoCapitalize="none"
      />
      <InputField
        label="Full name (optional)"
        value={fullName}
        onChangeText={setFullName}
      />
      <InputField
        label="Password"
        value={password}
        onChangeText={setPassword}
        autoCapitalize="none"
        secureTextEntry
      />

      <PrimaryButton label="Create" onPress={handleRegister} />
    </View>
  );
}
