import React, { useState } from 'react';
import { View, Text } from 'react-native';
import { useTheme } from 'react-native-paper';

import InputField from '../components/InputField';
import PrimaryButton from '../components/PrimaryButton';

import { useForgotPasswordScreenStyles } from '../styles/screens/ForgotPasswordScreen.styles';

export default function ForgotPasswordScreen() {
  const { colors } = useTheme();
  const styles = useForgotPasswordScreenStyles();
  const [email, setEmail] = useState('');

  return (
    <View style={[styles.container, { backgroundColor: colors.background }]}>
      <Text style={styles.title}>Family Organizer</Text>
      <Text style={styles.subtitle}>Forgot Password ?</Text>
      <Text style={styles.description}>Enter email to get verification code</Text>

      <InputField
        label="Email"
        value={email}
        onChangeText={setEmail}
        keyboardType="email-address"
        autoCapitalize="none"
      />

      <PrimaryButton label="Continue" onPress={() => {}} />
    </View>
  );
}
