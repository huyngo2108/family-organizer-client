import { makeStyles } from '../utils/makeStyles';
import spacing from '../../theme/spacing';

export const useSearchScreenStyles = makeStyles(() => ({
  container: { flex: 1 },
  searchInput: {
    margin: spacing.md,
  },
  filterSection: {
    flexDirection: 'row',
    alignItems: 'center',
    marginHorizontal: spacing.md,
    marginBottom: spacing.md,
  },
  filterButton: {
    paddingHorizontal: 12,
    paddingVertical: 6,
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 8,
    marginRight: 8,
  },
  resultText: {
    fontSize: 14,
    color: '#666',
    marginLeft: 'auto',
  },
  list: {
    paddingHorizontal: spacing.md,
  },
  tableHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: spacing.md,
    paddingBottom: spacing.sm,
  },
  headerText: {
    fontWeight: '600',
    fontSize: 14,
    flex: 1,
  },
  taskRow: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: spacing.sm,
    borderBottomWidth: 1,
    borderColor: '#e0e0e0',
  },
  memberColumn: {
    flex: 1,
    alignItems: 'center',
  },
  avatar: {
    width: 56,
    height: 56,
    borderRadius: 28,
  },
  memberName: {
    fontSize: 12,
    marginTop: 4,
  },
  taskInfoColumn: {
    flex: 2,
    paddingLeft: spacing.md,
  },
  taskTitle: {
    fontWeight: '600',
    fontSize: 14,
  },
  taskSub: {
    fontSize: 12,
    color: '#666',
  },
  progressColumn: {
    flex: 1,
    alignItems: 'center',
  },
  priorityBadge: {
    paddingHorizontal: 8,
    paddingVertical: 2,
    borderRadius: 12,
    marginBottom: 4,
  },
  badgeText: {
    fontSize: 12,
    fontWeight: '500',
    color: '#fff',
  },
  taskStatus: {
    fontSize: 12,
    color: '#666',
  },
}));
