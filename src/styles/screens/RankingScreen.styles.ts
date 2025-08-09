import { makeStyles } from '../utils/makeStyles';
import spacing from '../../theme/spacing';

export const useRankingScreenStyles = makeStyles(() => ({
  container: { flex: 1 },
  groupContainer: {
    marginBottom: spacing.md,
    paddingHorizontal: spacing.md,
  },
  dateRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: spacing.sm,
  },
  dateText: {
    fontWeight: 'bold',
    fontSize: 16,
  },
  chevron: { fontSize: 16 },
  rowWrapper: {
    flexDirection: 'row',
    gap: 10,
  },
  rankBox: {
    flex: 1,
    aspectRatio: 1,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 8,
    borderWidth: 1,
    borderColor: 'black',
    padding: spacing.sm,
  },
  rankNumber: {
    position: 'absolute',
    top: 4,
    left: 6,
    fontWeight: 'bold',
    fontSize: 14,
  },
  avatar: {
    marginBottom: 4,
    backgroundColor: 'transparent',
    borderWidth: 1,
    borderColor: 'black',
  },
  footerRow: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: spacing.md,
    marginTop: spacing.md,
    gap: 12,
  },
  banner: {
    width: 140,
    height: 160,
    borderRadius: 12,
  },
  userList: {
    flex: 1,
    justifyContent: 'center',
  },
  userRow: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: spacing.sm,
  },
  userAvatar: {
    marginRight: spacing.sm,
  },
  userInfo: {},
  email: {
    color: '#888',
    fontSize: 12,
  },
}));
