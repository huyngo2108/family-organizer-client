import React from 'react';
import { View, ScrollView, Text, Image } from 'react-native';
import { useTheme, Avatar } from 'react-native-paper';
import Header from '../components/Header';

import { useRankingScreenStyles } from '../styles/screens/RankingScreen.styles';

const rankingGroups = [
  {
    id: '1',
    dateRange: '21/7 - 27/7',
    data: [
      { rank: 1, name: 'Nala', color: '#FFF176', avatar: require('../../assets/images/nala.png') },
      { rank: 2, name: 'Peter', color: '#CFD8DC', avatar: require('../../assets/images/peter.png') },
      { rank: 3, name: 'Andrew', color: '#FFCC80', avatar: require('../../assets/images/andrew.png') },
    ],
  },
  {
    id: '2',
    dateRange: '28/7 - 3/8',
    data: [
      { rank: 1, name: 'Peter', color: '#FFF176', avatar: require('../../assets/images/peter.png') },
      { rank: 2, name: 'Nala', color: '#CFD8DC', avatar: require('../../assets/images/nala.png') },
      { rank: 3, name: 'Andrew', color: '#FFCC80', avatar: require('../../assets/images/andrew.png') },
    ],
  },
  {
    id: '3',
    dateRange: '4/8 - 10/8',
    data: [
      { rank: 1, name: 'Andrew', color: '#FFF176', avatar: require('../../assets/images/andrew.png') },
      { rank: 2, name: 'Nala', color: '#CFD8DC', avatar: require('../../assets/images/nala.png') },
      { rank: 3, name: 'Peter', color: '#FFCC80', avatar: require('../../assets/images/peter.png') },
    ],
  },
];

const users = [
  { name: 'Nala', email: 'nala@fakedomain.net', avatar: require('../../assets/images/nala.png'), bgColor: '#FFF176' },
  { name: 'Peter', email: 'peter@fakedomain.net', avatar: require('../../assets/images/peter.png'), bgColor: '#CFD8DC' },
  { name: 'Andrew', email: 'andrew@fakedomain.net', avatar: require('../../assets/images/andrew.png'), bgColor: '#FFCC80' },
];

export default function RankingScreen() {
  const { colors } = useTheme();
  const styles = useRankingScreenStyles();

  return (
    <View style={[styles.container, { backgroundColor: colors.background }]}>
      <Header title="Ranking Last Weak" />
      <ScrollView showsVerticalScrollIndicator={false} contentContainerStyle={{ paddingBottom: 80 }}>
        {rankingGroups.map((group) => (
          <View key={group.id} style={styles.groupContainer}>
            <View style={styles.dateRow}>
              <Text style={styles.dateText}>{group.dateRange}</Text>
              <Text style={styles.chevron}>▼</Text>
            </View>
            <View style={styles.rowWrapper}>
              {group.data.map((item) => (
                <View
                  key={item.rank}
                  style={[styles.rankBox, { backgroundColor: item.color }]}
                >
                  <Text style={styles.rankNumber}>#{item.rank}</Text>
                  <Avatar.Image
                    source={item.avatar}
                    size={50}
                    style={styles.avatar}
                  />
                  <Text>{item.name}</Text>
                </View>
              ))}
            </View>
          </View>
        ))}

        <View style={styles.footerRow}>
          <Image
            source={require('../../assets/images/top_of_month.png')}
            style={styles.banner}
            resizeMode="contain"
          />
          <View style={styles.userList}>
            {users.map((user) => (
              <View key={user.email} style={styles.userRow}>
                <Avatar.Image
                  source={user.avatar}
                  size={36}
                  style={[styles.userAvatar, { backgroundColor: user.bgColor }]}
                />
                <View style={styles.userInfo}>
                  <Text>{user.name}</Text>
                  <Text style={styles.email}>{user.email}</Text>
                </View>
              </View>
            ))}
          </View>
        </View>
      </ScrollView>
    </View>
  );
}
