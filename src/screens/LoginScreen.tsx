import React, { useState } from 'react';
import { View, StyleSheet, Text, Alert } from 'react-native';
import { useTheme } from 'react-native-paper';
import { useNavigation } from '@react-navigation/native';
import { RootStackNavigation } from '../navigation/types'; 
import InputField from '../components/InputField';
import PrimaryButton from '../components/PrimaryButton';
import spacing from '../theme/spacing';

export default function LoginScreen() {
  const { colors } = useTheme();
  const navigation = useNavigation<RootStackNavigation>(); 
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = () => {
    if (!email || !password) {
      Alert.alert('Missing Info', 'Please enter both email and password.');
      return;
    }
    const correctEmail = 'test';
    const correctPassword = '1';

    if (email === correctEmail && password === correctPassword) {
      navigation.replace('MainApp');
    } else {
      Alert.alert('Login Failed', 'Invalid email or password.');
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

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: spacing.lg,
    justifyContent: 'center',
  },
  appTitle: {
    fontSize: 28,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: spacing.sm,
  },
  subTitle: {
    fontSize: 20,
    fontWeight: '600',
    textAlign: 'center',
    marginBottom: spacing.xs,
  },
  description: {
    fontSize: 14,
    textAlign: 'center',
    color: '#666',
    marginBottom: spacing.lg,
  },
});
