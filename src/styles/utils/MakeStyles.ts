import { useMemo } from 'react';
import { StyleSheet } from 'react-native';
import { MD3Theme, useTheme } from 'react-native-paper';

type NamedStyles<T> = StyleSheet.NamedStyles<T> | StyleSheet.NamedStyles<any>;

export function makeStyles<T extends NamedStyles<T>>(creator: (t: MD3Theme) => T) {
  return function useStyles() {
    const theme = useTheme();
    return useMemo(() => StyleSheet.create(creator(theme)), [theme]);
  };
}
