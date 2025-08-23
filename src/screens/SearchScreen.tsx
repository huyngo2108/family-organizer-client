import React, { useMemo, useState } from 'react';
import { View, FlatList, Text, Image } from 'react-native';
import { useTheme, TextInput } from 'react-native-paper';
import Header from '../components/Header';
import { useSearchScreenStyles } from '../styles/screens/SearchScreen.styles';
import { useTasks } from '../context/TaskContext';
import TaskRow from '../components/TaskRow';
import { mapTaskToRow, TaskRowModel } from '../adapters/task-to-row';

const dummyTasks: TaskRowModel[] = [
  { id: '1', title: 'Fold the Laundry', member: 'Nala', avatar: require('../../assets/images/nala.png'), time: '21:00 today', notes: 'none', priority: 'Medium', status: 'Unfinished' },
  { id: '2', title: 'Vacuum the Floor', member: 'Peter', avatar: require('../../assets/images/peter.png'), time: '12:00 today', notes: 'focus in the kitchen', priority: 'High', status: 'Unfinished' },
  { id: '3', title: 'Take Out The Rubbish', member: 'Peter', avatar: require('../../assets/images/peter.png'), time: '18:00 today', notes: 'none', priority: 'Low', status: 'Done' },
  { id: '4', title: 'Water The Plants', member: 'Rob', avatar: require('../../assets/images/rob.png'), time: '16:00 tomorrow', notes: 'none', priority: 'Medium', status: 'Unfinished' },
  { id: '5', title: 'Tidy Up The Room', member: 'Andrew', avatar: require('../../assets/images/andrew.png'), time: '08:00 tomorrow', notes: 'none', priority: 'High', status: 'Unfinished' },
  { id: '6', title: 'Fold The Laundry', member: 'Nala', avatar: require('../../assets/images/nala.png'), time: '10:00 today', notes: 'none', priority: 'Medium', status: 'Unfinished' },
  { id: '7', title: 'Vacuum The Floor', member: 'Peter', avatar: require('../../assets/images/peter.png'), time: '12:00 today', notes: 'focus in the kitchen', priority: 'High', status: 'Unfinished' },
];

export default function SearchScreen() {
  const { colors } = useTheme();
  const styles = useSearchScreenStyles();
  const { tasks } = useTasks();
  const [query, setQuery] = useState('');

  const liveRows = useMemo(() => tasks.map(mapTaskToRow), [tasks]);
  const allRows = useMemo(() => [...liveRows, ...dummyTasks], [liveRows]);
  const filtered = useMemo(
    () => allRows.filter(t => t.title.toLowerCase().includes(query.toLowerCase())),
    [allRows, query]
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
        <View style={styles.filterButton}><Text>All</Text></View>
        <View style={styles.filterButton}><Text>Unfinished</Text></View>
        <View style={styles.filterButton}><Text>Done</Text></View>
        <Text style={styles.resultText}>{filtered.length} results</Text>
      </View>
      <View style={styles.tableHeader}>
        <Text style={styles.headerText}>Member</Text>
        <Text style={styles.headerText}>Task Name</Text>
        <Text style={styles.headerText}>Progress</Text>
      </View>
      <FlatList
        data={filtered}
        keyExtractor={item => item.id}
        renderItem={({ item }) => <TaskRow {...item} />}
        contentContainerStyle={styles.list}
      />
    </View>
  );
}
