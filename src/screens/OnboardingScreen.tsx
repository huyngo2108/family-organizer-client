import React, { useEffect } from 'react';
import { View, Text } from 'react-native';
import { useTheme } from 'react-native-paper';

import { useOnboardingScreenStyles } from '../styles/screens/OnboardingScreen.styles';

export default function OnboardingScreen({ navigation }: { navigation: any }) {
  const { colors } = useTheme();
  const styles = useOnboardingScreenStyles();

  useEffect(() => {
    const timer = setTimeout(() => {
      navigation.replace('Login');
    }, 3000);
    return () => clearTimeout(timer);
  }, [navigation]);

  return (
    <View style={[styles.container, { backgroundColor: colors.background }]}>
      <Text style={styles.title}>FAMILY{'\n'}ORGANIZER</Text>
    </View>
  );
}
