import React from 'react';
import { TextInput, useTheme } from 'react-native-paper';
import { StyleSheet, StyleProp, ViewStyle } from 'react-native';
import spacing from '../theme/spacing';

interface InputFieldProps extends React.ComponentProps<typeof TextInput> {
  style?: StyleProp<ViewStyle>;
}

export default function InputField({ style, ...props }: InputFieldProps) {
  const { roundness, colors } = useTheme();
  return (
    <TextInput
      mode="outlined"
      style={[styles.input, { borderRadius: roundness, backgroundColor: '#FFFFFF' }, style]}
      outlineColor={colors.outline}
      activeOutlineColor="#00000087"
      textColor="#000000"
      {...props}
    />
  );
}

const styles = StyleSheet.create({
  input: { marginBottom: spacing.md },
});
