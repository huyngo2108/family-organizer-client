import React, { useState } from 'react';
import { View, StyleSheet, FlatList, Text, Image, Pressable } from 'react-native';
import { useTheme, TextInput } from 'react-native-paper';

import Header from '../components/Header';
import spacing from '../theme/spacing';
import colors from '../theme/colors';

const dummyTasks = [
  {
    id: '1',
    title: 'Fold the Laundry',
    member: 'Nala',
    avatar: require('../../assets/images/nala.png'),
    time: '21:00 today',
    notes: 'none',
    priority: 'Medium',
    status: 'Unfinished',
  },
  {
    id: '2',
    title: 'Vacuum the Floor',
    member: 'Peter',
    avatar: require('../../assets/images/peter.png'),
    time: '12:00 today',
    notes: 'focus in the kitchen',
    priority: 'High',
    status: 'Unfinished',
  },
  {
    id: '3',
    title: 'Take Out The Rubbish',
    member: 'Peter',
    avatar: require('../../assets/images/peter.png'),
    time: '18:00 today',
    notes: 'none',
    priority: 'Low',
    status: 'Done',
  },
  {
    id: '4',
    title: 'Water The Plants',
    member: 'Rob',
    avatar: require('../../assets/images/rob.png'),
    time: '16:00 tomorrow',
    notes: 'none',
    priority: 'Medium',
    status: 'Unfinished',
  },
  {
    id: '5',
    title: 'Tidy Up The Room',
    member: 'Andrew',
    avatar: require('../../assets/images/andrew.png'),
    time: '08:00 tomorrow',
    notes: 'none',
    priority: 'High',
    status: 'Unfinished',
  },
  {
    id: '6',
    title: 'Fold The Laundry',
    member: 'Nala',
    avatar: require('../../assets/images/nala.png'),
    time: '10:00 today',
    notes: 'none',
    priority: 'Medium',
    status: 'Unfinished',
  },
  {
    id: '7',
    title: 'Vacuum The Floor',
    member: 'Peter',
    avatar: require('../../assets/images/peter.png'),
    time: '12:00 today',
    notes: 'focus in the kitchen',
    priority: 'High',
    status: 'Unfinished',
  },
];

export default function SearchScreen() {
  const { colors } = useTheme();
  const [query, setQuery] = useState('');

  const filtered = dummyTasks.filter((t) =>
    t.title.toLowerCase().includes(query.toLowerCase())
  );

  return (
    <View style={[styles.container, { backgroundColor: colors.background }]}>
      <Header title="Search" />

      <TextInput
        mode="outlined"
        placeholder="Search tasks..."
        value={query}
        onChangeText={setQuery}
        style={styles.searchInput}
        left={<TextInput.Icon icon="magnify" />}
      />

      <View style={styles.filterSection}>
        <Pressable style={styles.filterButton}><Text>All</Text></Pressable>
        <Pressable style={styles.filterButton}><Text>Unfinished</Text></Pressable>
        <Pressable style={styles.filterButton}><Text>Done</Text></Pressable>
        <Text style={styles.resultText}>15 results</Text>
      </View>

      <View style={styles.tableHeader}>
        <Text style={styles.headerText}>Member</Text>
        <Text style={styles.headerText}>Task Name</Text>
        <Text style={styles.headerText}>Progress</Text>
      </View>

      <FlatList
        data={filtered}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <View style={styles.taskRow}>
            <View style={styles.memberColumn}>
              <Image source={item.avatar} style={styles.avatar} />
              <Text style={styles.memberName}>{item.member}</Text>
            </View>
            <View style={styles.taskInfoColumn}>
              <Text style={styles.taskTitle}>{item.title}</Text>
              <Text style={styles.taskSub}>{`~ ${item.time}`}</Text>
              <Text style={styles.taskSub}>{`notes: ${item.notes}`}</Text>
            </View>
            <View style={styles.progressColumn}>
              <View style={[styles.priorityBadge, badgeColor(item.priority)]}>
                <Text style={styles.badgeText}>{item.priority}</Text>
              </View>
              <Text style={styles.taskStatus}>{item.status}</Text>
            </View>
          </View>
        )}
        contentContainerStyle={styles.list}
      />
    </View>
  );
}

const badgeColor = (priority: string) => {
  switch (priority) {
    case 'High':
      return { backgroundColor: colors.yellow2 };
    case 'Medium':
      return { backgroundColor: colors.blue1 };
    case 'Low':
      return { backgroundColor: colors.green1 };
    default:
      return { backgroundColor: '#ccc' };
  }
};

const styles = StyleSheet.create({
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
});
