import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const OUTLINE = '#000000';
const FILL = '#f8f2e6';

export default function AuthLogo() {
  return (
    <View style={styles.wrap}>
      <Text style={[styles.outline, { top: -1, left: 0 }]}>Family Organizer</Text>
      <Text style={[styles.outline, { top: 1, left: 0 }]}>Family Organizer</Text>
      <Text style={[styles.outline, { top: 0, left: -1 }]}>Family Organizer</Text>
      <Text style={[styles.outline, { top: 0, left: 1 }]}>Family Organizer</Text>
      <Text style={styles.fill}>Family Organizer</Text>
    </View>
  );
}

const base = {
  fontSize: 32,
  fontWeight: '800' as const,
  textAlign: 'center' as const,
};

const styles = StyleSheet.create({
  wrap: {
    alignSelf: 'center',
    position: 'relative',
    marginBottom: 12,
  },
  outline: {
    ...base,
    position: 'absolute',
    color: OUTLINE,
  },
  fill: {
    ...base,
    color: FILL,
    textShadowColor: 'rgba(0, 0, 0, 0.08)',
    textShadowOffset: { width: 0, height: 2 },
    textShadowRadius: 3,
  },
});
