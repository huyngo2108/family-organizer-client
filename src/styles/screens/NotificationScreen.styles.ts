import { makeStyles } from '../utils/makeStyles';

export const useNotificationScreenStyles = makeStyles(() => ({
  container: {
    flex: 1,
  },
  customHeader: {
    paddingTop: 60,
    paddingBottom: 16,
    paddingHorizontal: 20,
    flexDirection: 'row',
    alignItems: 'center',
  },
  headerTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    alignSelf: 'center',
  },
  filterTabs: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    paddingVertical: 5,
  },
  tabButton: {
    paddingHorizontal: 18,
    paddingVertical: 8,
    borderRadius: 20,
    backgroundColor: '#fff',
    borderWidth: 1,
    borderColor: '#ddd',
  },
  activeTab: {
    backgroundColor: '#000',
    borderColor: '#000',
  },
  tabText: {
    fontSize: 14,
    color: '#000',
    fontWeight: '400',
  },
  activeTabText: {
    color: '#fff',
    fontWeight: '500',
  },
  notificationList: {
    paddingLeft: 20,
    paddingRight: 20,
  },
  notificationItem: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 14,
    minHeight: 74,
    borderBottomWidth: 0.5,
    borderColor: '#ddd',
  },
  avatarWrapper: {
    position: 'relative',
    marginRight: 10,
  },
  dot: {
    position: 'absolute',
    top: 19,
    left: -13,
    backgroundColor: 'red',
  },
  textWrapper: {
    flex: 1,
    marginLeft: 8,
  },
  nameText: {
    fontSize: 15,
    fontWeight: '500',
  },
  nameTextUnread: {
    fontWeight: '600',
  },
  messageText: {
    fontSize: 14,
    fontWeight: '300',
  },
  messageTextUnread: {
    fontWeight: '400',
  },
  timeText: {
    fontSize: 13,
    color: '#999',
    marginTop: 4,
  },
  acceptButton: {
    paddingVertical: 6,
    paddingHorizontal: 12,
    backgroundColor: '#000',
    borderRadius: 6,
  },
  acceptText: {
    color: 'white',
    fontSize: 13,
    fontWeight: '600',
  },
  noMoreText: {
    textAlign: 'center',
    color: '#B0B0B0',
    fontSize: 13,
    marginTop: 16,
    marginBottom: 12,
  },
}));
