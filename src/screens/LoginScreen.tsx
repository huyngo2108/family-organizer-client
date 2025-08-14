import React, { useState } from 'react';
import { View, Text, Alert, TouchableOpacity, Image } from 'react-native';
import { useTheme } from 'react-native-paper';
import { useNavigation } from '@react-navigation/native';
import { RootStackNavigation } from '../types';

import InputField from '../components/InputField';
import PrimaryButton from '../components/PrimaryButton';

import { useLoginScreenStyles } from '../styles/screens/LoginScreen.styles';
import { useAuth } from '../context/AuthContext';

export default function LoginScreen() {
  const { colors } = useTheme();
  const styles = useLoginScreenStyles();
  const navigation = useNavigation<RootStackNavigation>();
  const { login } = useAuth();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = async () => {
    if (!email || !password) {
      Alert.alert('Missing Info', 'Please enter both email and password.');
      return;
    }
    try {
      await login(email.trim(), password);
      navigation.replace('MainApp');
    } catch (err: any) {
      const msg =
        err?.message === 'INVALID_CREDENTIALS'
          ? 'Invalid email or password.'
          : 'Server or network error. Please try again.';
      Alert.alert('Login Failed', msg);
    }
  };

  return (
    <View style={[styles.container, { backgroundColor: colors.background }]}>
      <View style={styles.centerContent}>
        <Text style={styles.appTitle}>Family Organizer</Text>
        <Text style={styles.subTitle}>Sign Up</Text>
        <Text style={styles.description}>Enter your email and password to sign up for this app</Text>

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

        <View style={styles.forgotWrap}>
          <Text style={styles.forgotLabel}>FORGOT ACCOUNT</Text>
        </View>

        <View style={styles.dividerRow}>
          <View style={styles.dividerLine} />
          <Text style={styles.dividerText}>or</Text>
          <View style={styles.dividerLine} />
        </View>

        <View style={styles.helperWrap}>
          <Text style={styles.helperText}>
            If you do not have an account.{' '}
            <Text
              style={styles.registerNow}
              onPress={() => navigation.navigate('Register')}
            >
              Register now!
            </Text>
          </Text>
        </View>

        <TouchableOpacity activeOpacity={0.9} style={styles.socialBtn}>
          <View style={styles.socialInner}>
            <Image
              style={styles.socialIcon}
              source={require('../../assets/images/Google.png')}
            />
            <Text style={styles.socialText}>Continue with Google</Text>
          </View>
        </TouchableOpacity>

        <TouchableOpacity activeOpacity={0.9} style={[styles.socialBtn, styles.socialBtnSpacing]}>
          <View style={styles.socialInner}>
            <Image
              style={styles.socialIcon}
              source={require('../../assets/images/Apple.png')}
            />
            <Text style={styles.socialText}>Continue with Apple</Text>
          </View>
        </TouchableOpacity>

        <Text style={styles.legalText}>
          By clicking continue, you agree to our <Text style={styles.linkText}>Terms of Service</Text> and{' '}
          <Text style={styles.linkText}>Privacy Policy</Text>
        </Text>
      </View>
    </View>
  );
}
