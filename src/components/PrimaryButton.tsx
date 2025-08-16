import React from 'react';
import { Button, Text } from 'react-native-paper';
import { StyleSheet, StyleProp, ViewStyle } from 'react-native';
import spacing from '../theme/spacing';

interface PrimaryButtonProps {
  label: string;
  style?: StyleProp<ViewStyle>;
  [key: string]: any;
}

export default function PrimaryButton({ label, style, ...props }: PrimaryButtonProps) {
  return (
    <Button
      mode="contained"
      style={[styles.button, style, { backgroundColor: '#000000', borderRadius: 8 }]}
      contentStyle={{ height: 48 }}
      labelStyle={{ color: '#FFFFFF', fontWeight: '600' }}
      {...props}
    >
      <Text style={{ color: '#FFFFFF' }}>{label}</Text>
    </Button>
  );
}

const styles = StyleSheet.create({
  button: { marginTop: spacing.sm },
});
