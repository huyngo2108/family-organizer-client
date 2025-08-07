import React from 'react';
import { Button, Text, useTheme } from 'react-native-paper';
import { StyleSheet, StyleProp, ViewStyle } from 'react-native';
import spacing from '../theme/spacing';

interface PrimaryButtonProps {
  label: string;
  style?: StyleProp<ViewStyle>;
  [key: string]: any;
}

export default function PrimaryButton({ label, style, ...props }: PrimaryButtonProps) {
  const { roundness, colors } = useTheme();

  return (
    <Button
      mode="contained"
      style={[
        styles.button,
        { borderRadius: roundness, backgroundColor: colors.primary },
        style,
      ]}
      labelStyle={{ color: colors.onPrimary }}
      {...props}
    >
      <Text>{label}</Text>
    </Button>
  );
}

const styles = StyleSheet.create({
  button: {
    marginTop: spacing.sm,
  },
});
