import { makeStyles } from '../utils/makeStyles';
import spacing from '../../theme/spacing';

export const useHomeScreenStyles = makeStyles(() => ({
  container: { flex: 1 },
  section: {
    paddingVertical: spacing.md,
    paddingHorizontal: spacing.md,
  },
  sectionHeader: {
    paddingHorizontal: spacing.md,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: spacing.sm,
  },
  headerLeft: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: '600',
  },
  link: {
    fontSize: 14,
    color: '#007AFF',
    marginLeft: 24,
  },
}));
