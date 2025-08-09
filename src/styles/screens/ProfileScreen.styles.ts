import { makeStyles } from '../utils/makeStyles';
import spacing from '../../theme/spacing';

export const useProfileScreenStyles = makeStyles(() => ({
  container: {
    flex: 1,
    padding: spacing.lg,
  },
  headerTabs: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    paddingBottom: spacing.sm,
    marginBottom: spacing.sm,
    marginTop: 38,
  },
  tabText: {
    fontSize: 16,
    color: '#666',
  },
  activeTab: {
    fontWeight: 'bold',
    color: '#000',
    borderBottomWidth: 2,
    borderColor: '#000',
    paddingBottom: spacing.xs,
  },
  profileContainer: {
    borderTopWidth: 1,
    borderBottomWidth: 1,
    borderColor: '#ddd',
    paddingVertical: spacing.lg,
    alignItems: 'center',
  },
  avatarInfoWrapper: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: spacing.md,
  },
  avatar: {
    width: 80,
    height: 80,
    borderRadius: 40,
    marginRight: spacing.md,
  },
  infoTextWrapper: {
    justifyContent: 'center',
  },
  name: {
    fontSize: 16,
    fontWeight: '700',
  },
  email: {
    fontSize: 14,
    color: '#666',
  },
  infoBox: {
    borderWidth: 1,
    borderRadius: 8,
    borderColor: '#ccc',
    padding: spacing.md,
    width: '100%',
    backgroundColor: '#fff',
    marginBottom: spacing.md,
  },
  infoItem: {
    fontSize: 14,
    marginBottom: spacing.sm,
  },
  label: {
    fontWeight: 'bold',
  },
  editButton: {
    backgroundColor: '#eee',
    paddingVertical: spacing.sm,
    paddingHorizontal: spacing.md,
    borderRadius: 6,
    elevation: 2,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.3,
    shadowRadius: 2,
  },
  editButtonText: {
    fontWeight: '600',
    color: '#333',
  },
  logoutText: {
    marginTop: spacing.lg,
    fontSize: 14,
    color: '#444',
    marginLeft: spacing.sm,
  },
}));
