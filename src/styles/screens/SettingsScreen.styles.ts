import { makeStyles } from '../utils/makeStyles';
import spacing from '../../theme/spacing';

export const useSettingsScreenStyles = makeStyles(() => ({
  container: {
    flex: 1,
  },
  row: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: spacing.sm,
  },
  label: {
    fontSize: 16,
  },
}));
