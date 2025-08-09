import { makeStyles } from '../utils/makeStyles';
import spacing from '../../theme/spacing';

export const useLoginScreenStyles = makeStyles(() => ({
  container: {
    flex: 1,
    padding: spacing.lg,
    justifyContent: 'center',
  },
  appTitle: {
    fontSize: 28,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: spacing.sm,
  },
  subTitle: {
    fontSize: 20,
    fontWeight: '600',
    textAlign: 'center',
    marginBottom: spacing.xs,
  },
  description: {
    fontSize: 14,
    textAlign: 'center',
    color: '#666',
    marginBottom: spacing.lg,
  },
}));
