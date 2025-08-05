import React, { useEffect } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { useTheme } from 'react-native-paper';

export default function OnboardingScreen({ navigation }: { navigation: any }) {
  const { colors } = useTheme();

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

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 24,
  },
  title: {
    fontSize: 32,
    fontWeight: '900',
    textAlign: 'center',
    textTransform: 'uppercase',
    textShadowColor: '#00000055',
    textShadowOffset: { width: 1, height: 1 },
    textShadowRadius: 3,
  },
});
