import React, { useState } from 'react';
import {
  View,
  Text,
  ScrollView,
  TouchableOpacity,
} from 'react-native';
import { useTheme, Avatar, Badge } from 'react-native-paper';

import { useNotificationScreenStyles } from '../styles/screens/NotificationScreen.styles';

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
  const styles = useNotificationScreenStyles();
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
            <Text style={[styles.tabText, activeTab === tab && styles.activeTabText]}>
              {tab}
            </Text>
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
                <Text style={[styles.nameText, isUnread && styles.nameTextUnread]}>
                  {item.name}
                </Text>
                <Text style={[styles.messageText, isUnread && styles.messageTextUnread]}>
                  {item.message}
                </Text>
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
        <Text style={styles.noMoreText}>no older notifications</Text>
      </ScrollView>
    </View>
  );
}
