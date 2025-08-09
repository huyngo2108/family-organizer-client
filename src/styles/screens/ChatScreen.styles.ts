import { makeStyles } from '../utils/makeStyles';
import spacing from '../../theme/spacing';

export const useChatScreenStyles = makeStyles(() => ({
  container: { flex: 1 },
  chatList: { padding: spacing.md },
  bubble: {
    maxWidth: '75%',
    padding: spacing.sm,
    borderRadius: 12,
    marginVertical: spacing.xs,
  },
  inputRow: {
    flexDirection: 'row',
    alignItems: 'center',
    borderTopWidth: 1,
    padding: spacing.sm,
  },
  textInput: {
    flex: 1,
    height: 40,
    paddingHorizontal: spacing.sm,
  },
  sendButton: {
    paddingHorizontal: spacing.sm,
  },
}));
