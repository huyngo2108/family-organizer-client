import React, { useState } from 'react';
import { View, Text } from 'react-native';
import { useTheme } from 'react-native-paper';

import InputField from '../components/InputField';
import PrimaryButton from '../components/PrimaryButton';

import { useRegisterScreenStyles } from '../styles/screens/RegisterScreen.styles';

export default function RegisterScreen() {
  const { colors } = useTheme();
  const styles = useRegisterScreenStyles();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

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
        label="Password"
        value={password}
        onChangeText={setPassword}
        autoCapitalize="none"
        secureTextEntry
      />

      <PrimaryButton label="Create" onPress={() => {}} />
    </View>
  );
}
