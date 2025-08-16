import { StyleSheet } from 'react-native';
import { useTheme } from 'react-native-paper';

export const useLoginScreenStyles = () => {
  const { colors } = useTheme();

  return StyleSheet.create({
    container: { flex: 1, paddingHorizontal: 20, paddingTop: 64 },
    centerContent: { flex: 1, justifyContent: 'center' },
    appTitle: { fontSize: 32, fontWeight: '800', textAlign: 'center', marginBottom: 12, color: colors.onBackground },
    subTitle: { fontSize: 18, fontWeight: '700', textAlign: 'center', marginTop: 8, color: colors.onBackground },
    description: { fontSize: 14, textAlign: 'center', marginTop: 6, marginBottom: 16, color: colors.onSurfaceVariant },
    forgotWrap: { alignItems: 'center', marginTop: 16 },
    forgotLabel: { fontSize: 12, letterSpacing: 1, fontWeight: '800', color: colors.onSurfaceDisabled },
    dividerRow: { flexDirection: 'row', alignItems: 'center', marginTop: 16 },
    dividerLine: { flex: 1, height: 1, backgroundColor: colors.outlineVariant },
    dividerText: { marginHorizontal: 8, color: colors.onSurfaceVariant },
    helperWrap: { alignItems: 'center', marginTop: 8 },
    helperText: { color: colors.onSurfaceVariant, textAlign: 'center' },
    registerNow: { color: '#000', fontWeight: '600' },
    socialBtn: { marginTop: 16, paddingVertical: 12, borderRadius: 12, backgroundColor: '#E9E9E9' },
    socialBtnSpacing: { marginTop: 12 },
    socialInner: { flexDirection: 'row', alignItems: 'center', justifyContent: 'center', gap: 3 },
    socialIcon: { width: 18, height: 18, marginRight: 8, resizeMode: 'contain' },
    socialText: { fontWeight: '500', color: '#000000' },
    legalText: { marginTop: 16, textAlign: 'center', fontSize: 12, color: colors.onSurfaceVariant, lineHeight: 18 },
    linkText: { color: colors.onSurface, fontWeight: '500' },
  });
};
