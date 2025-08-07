import React from 'react';
import { View, FlatList, StyleSheet, Text, Alert } from 'react-native';
import { useTheme } from 'react-native-paper';
import Header from '../components/Header';
import spacing from '../theme/spacing';

const rankingData = [
  { id: '1', name: 'Nala', score: 98 },
  { id: '2', name: 'Peter', score: 92 },
  { id: '3', name: 'Andrew', score: 88 },
];

export default function RankingScreen() {
  const { colors } = useTheme();

  const handleRowPress = (item: typeof rankingData[0]) => {
    Alert.alert('Ranking Info', `${item.name} scored ${item.score} points.`);
  };

  return (
    <View style={[styles.container, { backgroundColor: colors.background }]}>
      <Header title="Ranking Last Week" />
      <FlatList
        data={rankingData}
        keyExtractor={(item) => item.id}
        contentContainerStyle={styles.list}
        renderItem={({ item, index }) => (
          <View
            style={styles.row}
            onTouchEnd={() => handleRowPress(item)}
          >
            <Text style={[styles.rank, { color: colors.primary }]}>#{index + 1}</Text>
            <Text style={styles.name}>{item.name}</Text>
            <Text style={styles.score}>{item.score}</Text>
          </View>
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1 },
  list: { padding: spacing.md },
  row: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: spacing.sm,
    borderBottomWidth: 1,
    borderBottomColor: '#eee',
  },
  rank: { width: 40, fontWeight: '600' },
  name: { flex: 1 },
  score: { width: 60, textAlign: 'right' },
});
