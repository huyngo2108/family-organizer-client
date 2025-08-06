import { MD3LightTheme } from 'react-native-paper';
import colors from './colors';
import spacing from './spacing';

export const theme = {
  ...MD3LightTheme,
  roundness: 8,
  spacing,
  colors: {
    ...MD3LightTheme.colors,
    primary: colors.primary,
    background: colors.background,
    outline: colors.grey1,
    onPrimary: colors.text,
    surface: '#ffffff',
    onSurface: colors.text,
  },
};

export default theme;
