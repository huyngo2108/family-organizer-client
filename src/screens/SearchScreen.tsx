import React, { useState } from 'react';
import { View, FlatList, StyleSheet } from 'react-native';
import { useTheme, TextInput } from 'react-native-paper';

import Header from '../components/Header';
import TaskCard from '../components/TaskCard';
import spacing from '../theme/spacing';

const dummyTasks = [
  { id: '1', title: 'Fold the Laundry', imageUri: 'https://i.imgur.com/abc1.png' },
  { id: '2', title: 'Vacuum the Floor', imageUri: 'https://i.imgur.com/abc2.png' },
  { id: '3', title: 'Water the Plants', imageUri: 'https://i.imgur.com/abc3.png' },
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

      <FlatList
        data={filtered}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <TaskCard {...item} onPress={() => {}} />
        )}
        contentContainerStyle={styles.list}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1 },
  searchInput: {
    margin: spacing.md,
  },
  list: {
    paddingHorizontal: spacing.md,
  },
});
