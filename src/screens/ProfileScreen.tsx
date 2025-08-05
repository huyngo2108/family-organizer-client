import React from 'react';
import { View, StyleSheet, Text, Image } from 'react-native';
import { useTheme } from 'react-native-paper';
import spacing from '../theme/spacing';

export default function ProfileScreen() {
  const { colors } = useTheme();

  return (
    <View style={[styles.container, { backgroundColor: colors.background }]}>
      <Image
        source={{ uri: 'https://i.imgur.com/uU9FZRD.png' }}
        style={styles.avatar}
      />
      <Text style={styles.name}>Andrew Nguyen</Text>
      <Text style={styles.email}>andrew@example.com</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    padding: spacing.lg,
  },
  avatar: {
    width: 100,
    height: 100,
    borderRadius: 50,
    marginBottom: spacing.md,
  },
  name: {
    fontSize: 20,
    fontWeight: '700',
    marginBottom: spacing.xs,
  },
  email: {
    fontSize: 14,
    color: '#666',
  },
});
