import React from 'react';
import {
  View,
  StyleSheet,
  ScrollView,
  Text,
  FlatList,
  TouchableOpacity,
} from 'react-native';
import { useTheme } from 'react-native-paper';
import { useNavigation } from '@react-navigation/native';
import type { BottomTabNavigationProp } from '@react-navigation/bottom-tabs';
import type { BottomTabParamList } from '../types';

import SearchBar from '../components/SearchBar';  
import BannerCarousel from '../components/BannerCarousel';
import spacing from '../theme/spacing';
import Header from '../components/Header';
import Avatar from '../components/Avatar';
import TaskCard from '../components/TaskCard';

const members = [
  { id: '1', label: 'Andrew', uri: require('../../assets/images/andrew.png') },
  { id: '2', label: 'Nala', uri: require('../../assets/images/nala.png') },
  { id: '3', label: 'Rob', uri: require('../../assets/images/rob.png') },
  { id: '4', label: 'Peter', uri: require('../../assets/images/peter.png') },
  { id: '5', label: 'Elly', uri: require('../../assets/images/elly.png') },
];

const tasks = [
  { id: 't1', title: "last week's rankings", image: require('../../assets/images/rank.png') },
  { id: 't2', title: 'create more tasks', image: require('../../assets/images/create.png') },
];

export default function HomeScreen() {
  const { colors } = useTheme();
  const navigation = useNavigation<BottomTabNavigationProp<BottomTabParamList>>();

  return (
    <View style={[styles.container, { backgroundColor: colors.background }]}>
      <Header
        title="Family Organizer"
        onBellPress={() => navigation.navigate('Notification')}
      />

      <SearchBar />

      <ScrollView showsVerticalScrollIndicator={false}>
        <BannerCarousel style={{ marginVertical: spacing.sm }} />

        <View style={styles.section}>
          <View style={styles.sectionHeader}>
            <View style={styles.headerLeft}>
              <Text style={styles.sectionTitle}>Message to members</Text>
              <Text style={styles.link}>Family Group</Text>
            </View>
          </View>

          <ScrollView
            horizontal
            showsHorizontalScrollIndicator={false}
            style={{ marginTop: 8 }}
          >
            {members.map((member) => (
              <Avatar key={member.id} {...member} />
            ))}
          </ScrollView>
        </View>

        <View style={styles.section}>
          <Text style={styles.sectionTitle}>More</Text>
          <FlatList
            horizontal
            data={tasks}
            keyExtractor={(item) => item.id}
            renderItem={({ item }) => (
              <TaskCard
                image={item.image}
                title={item.title}
                onPress={() => {
                  if (item.id === 't1') navigation.navigate('Ranking');
                  if (item.id === 't2') navigation.navigate('AddTask');
                }}
              />
            )}
            showsHorizontalScrollIndicator={false}
            contentContainerStyle={{ marginTop: 5 }}
          />
        </View>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
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
});
