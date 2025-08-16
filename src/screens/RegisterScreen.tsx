import React, { useState } from 'react';
import { View, Text, Alert } from 'react-native';
import { useTheme } from 'react-native-paper';
import { useNavigation } from '@react-navigation/native';
import type { AuthStackNavigation } from '../types';
import InputField from '../components/InputField';
import PrimaryButton from '../components/PrimaryButton';
import AuthLogo from '../components/AuthLogo';
import { useLoginScreenStyles } from '../styles/screens/LoginScreen.styles';
import { useAuth } from '../context/AuthContext';

export default function RegisterScreen() {
  const { colors } = useTheme();
  const styles = useLoginScreenStyles();
  const navigation = useNavigation<AuthStackNavigation>();
  const { register } = useAuth();

  const [fullName, setFullName] = useState('');
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleRegister = async () => {
    if (!email || !username || !password) {
      Alert.alert('Missing Info', 'Please enter Email, Username and Password.');
      return;
    }
    try {
      await register(
        email.trim(),
        username.trim(),
        password,
        fullName.trim() || undefined
      );
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
      <View style={styles.centerContent}>
        <AuthLogo />
        <Text style={styles.subTitle}>Create an account</Text>
        <Text style={styles.description}>
          Enter email and password to create account
        </Text>

        <InputField
          label="Full name (optional)"
          value={fullName}
          onChangeText={setFullName}
        />
        <InputField
          label="Username"
          value={username}
          onChangeText={setUsername}
          autoCapitalize="none"
        />
        <InputField
          label="Email"
          value={email}
          onChangeText={setEmail}
          autoCapitalize="none"
          keyboardType="email-address"
        />
        <InputField
          label="Password"
          value={password}
          onChangeText={setPassword}
          autoCapitalize="none"
          secureTextEntry
        />

        <PrimaryButton label="Create" onPress={handleRegister} />

        <View style={styles.helperWrap}>
          <Text style={styles.helperText}>
            If you already have an account.{' '}
            <Text
              style={styles.registerNow}
              onPress={() => navigation.navigate('Login')}
            >
              Login now!
            </Text>
          </Text>
        </View>
      </View>
    </View>
  );
}
