import React, { useState } from 'react';
import {
  View,
  StyleSheet,
  Text,
  ScrollView,
  TouchableOpacity,
} from 'react-native';
import { useTheme, Avatar, Badge } from 'react-native-paper';

const notifications = [
  {
    id: '1',
    name: 'Elly',
    message: 'Want to connect with you',
    time: '1d',
    avatar: require('../../assets/images/elly.png'),
    type: 'button',
  },
  {
    id: '2',
    name: 'Peter',
    message: 'has completed his mission',
    time: '1d',
    avatar: require('../../assets/images/peter.png'),
  },
  {
    id: '3',
    name: 'Nala',
    message: 'hmmm',
    time: '2d',
    avatar: require('../../assets/images/nala.png'),
  },
  {
    id: '4',
    name: 'Andrew',
    message: 'Cool\nYes, Mom. I agree. I have a lot of ho...',
    time: '3d',
    avatar: require('../../assets/images/andrew.png'),
  },
  {
    id: '5',
    name: 'Nala',
    message: 'joined the family group through your invitation',
    time: '2d',
    avatar: require('../../assets/images/nala.png'),
  },
  {
    id: '6',
    name: 'Rob',
    message: 'joined the family group through your invitation',
    time: '5d',
    avatar: require('../../assets/images/rob.png'),
  },
  {
    id: '7',
    name: 'Peter',
    message: 'joined the family group through your invitation',
    time: '5d',
    avatar: require('../../assets/images/peter.png'),
  },
];

export default function NotificationScreen() {
  const { colors } = useTheme();
  const [activeTab, setActiveTab] = useState('Recent');

  return (
    <View style={[styles.container, { backgroundColor: colors.background }]}>
    <View style={styles.customHeader}>
        <Text style={styles.headerTitle}>Notifications</Text>
    </View>

      <View style={styles.filterTabs}>
        {['Recent', 'New Messenger', 'New Follower'].map((tab) => (
          <TouchableOpacity
            key={tab}
            style={[styles.tabButton, activeTab === tab && styles.activeTab]}
            onPress={() => setActiveTab(tab)}
          >
            <Text style={[styles.tabText, activeTab === tab && styles.activeTabText]}>{tab}</Text>
          </TouchableOpacity>
        ))}
      </View>

      <ScrollView contentContainerStyle={styles.notificationList}>
        {notifications.map((item, index) => {
          const isUnread = index < 5;
          return (
            <View key={item.id} style={styles.notificationItem}>
              <View style={styles.avatarWrapper}>
                <Avatar.Image source={item.avatar} size={48} />
                {isUnread && <Badge style={styles.dot} size={7} />}
              </View>
              <View style={styles.textWrapper}>
                <Text style={[styles.nameText, isUnread && styles.nameTextUnread]}>{item.name}</Text>
                <Text style={[styles.messageText, isUnread && styles.messageTextUnread]}>{item.message}</Text>
                <Text style={styles.timeText}>{item.time}</Text>
              </View>
              {item.type === 'button' && (
                <TouchableOpacity style={styles.acceptButton}>
                  <Text style={styles.acceptText}>Accept</Text>
                </TouchableOpacity>
              )}
            </View>
          );
        })}
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
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
    paddingRight:20,
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
});
