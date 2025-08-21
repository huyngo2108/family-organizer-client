import React from 'react';
import { View, Image, Text } from 'react-native';
import colors from '../theme/colors';
import { useSearchScreenStyles } from '../styles/screens/SearchScreen.styles';
import type { TaskRowModel } from '../adapters/task-to-row';

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

export default function TaskRow(props: TaskRowModel) {
  const styles = useSearchScreenStyles();
  return (
    <View style={styles.taskRow}>
      <View style={styles.memberColumn}>
        <Image source={props.avatar} style={styles.avatar} />
        <Text style={styles.memberName}>{props.member}</Text>
      </View>
      <View style={styles.taskInfoColumn}>
        <Text style={styles.taskTitle}>{props.title}</Text>
        <Text style={styles.taskSub}>{`~ ${props.time}`}</Text>
        <Text style={styles.taskSub}>{`notes: ${props.notes}`}</Text>
      </View>
      <View style={styles.progressColumn}>
        <View style={[styles.priorityBadge, badgeColor(props.priority)]}>
          <Text style={styles.badgeText}>{props.priority}</Text>
        </View>
        <Text style={styles.taskStatus}>{props.status}</Text>
      </View>
    </View>
  );
}
