import React, { useMemo, useState } from 'react';
import { View, StyleSheet, KeyboardAvoidingView, Platform, FlatList, Alert, TouchableOpacity } from 'react-native';
import { useTheme, TextInput, Button, Appbar, Text, Divider } from 'react-native-paper';
import { useTasks } from '../context/TaskContext';
import { Priority } from '../types/task';
import TaskRow from '../components/TaskRow';
import { mapTaskToRow } from '../adapters/task-to-row';

const PRIORITIES: Priority[] = ['Low', 'Medium', 'High'];

function normalizeDateInput(input: string) {
  const digits = input.replace(/[^\d]/g, '').slice(0, 8);
  const parts: string[] = [];
  if (digits.length >= 2) parts.push(digits.slice(0, 2));
  if (digits.length >= 4) parts.push(digits.slice(2, 4));
  if (digits.length > 4) parts.push(digits.slice(4));
  return parts.join('/');
}

export default function CreateTaskScreen() {
  const { colors } = useTheme();
  const { tasks, createTask } = useTasks();

  const [title, setTitle] = useState('');
  const [dueDate, setDueDate] = useState('');
  const [priority, setPriority] = useState<Priority>('Medium');
  const [description, setDescription] = useState('');
  const [assigneeEmail, setAssigneeEmail] = useState('');

  const onDateChange = (text: string) => setDueDate(normalizeDateInput(text));

  const onCreate = () => {
    if (!title.trim()) return;
    if (assigneeEmail && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(assigneeEmail.trim())) return;
    createTask({ title, dueDate, priority, description, assigneeEmail });
    setTitle('');
    setDueDate('');
    setPriority('Medium');
    setDescription('');
    setAssigneeEmail('');
  };

  const rowData = useMemo(() => tasks.map(mapTaskToRow), [tasks]);

  return (
    <KeyboardAvoidingView
      style={[styles.container, { backgroundColor: colors.background }]}
      behavior={Platform.OS === 'ios' ? 'padding' : undefined}
    >
      <Appbar.Header mode="small">
        <Appbar.BackAction onPress={() => {}} />
        <Appbar.Content title="Household Task" />
        <Appbar.Action icon="account-circle" onPress={() => {}} />
      </Appbar.Header>

      <View style={styles.form}>
        <TextInput
          label="Create Task"
          placeholder="Name Task"
          value={title}
          onChangeText={setTitle}
          mode="outlined"
          style={styles.input}
        />
        <TextInput
          label="Completion Deadline"
          placeholder="DD/MM/YYYY"
          value={dueDate}
          onChangeText={onDateChange}
          mode="outlined"
          style={styles.input}
          keyboardType="number-pad"
          maxLength={10}
        />
        <View style={styles.segmentWrap}>
          {PRIORITIES.map(p => {
            const active = p === priority;
            return (
              <TouchableOpacity
                key={p}
                style={[styles.segmentItem, active && styles.segmentActive]}
                onPress={() => setPriority(p)}
                activeOpacity={0.8}
              >
                <Text style={[styles.segmentText, active && styles.segmentTextActive]}>{p}</Text>
              </TouchableOpacity>
            );
          })}
        </View>
        <TextInput
          label="Description"
          placeholder="Add Reminders"
          value={description}
          onChangeText={setDescription}
          mode="outlined"
          style={styles.input}
          multiline
        />
        <TextInput
          label="Assigned To Members"
          placeholder="member@example.com"
          value={assigneeEmail}
          onChangeText={setAssigneeEmail}
          mode="outlined"
          style={styles.input}
          autoCapitalize="none"
          keyboardType="email-address"
        />
        <Button mode="contained-tonal" onPress={onCreate} style={styles.createBtn} contentStyle={{ height: 48 }}>
          Create Task
        </Button>
      </View>

      <Divider />
      <View style={styles.listWrap}>
        <Text variant="titleMedium" style={styles.sectionTitle}>Recently Created</Text>
        <FlatList
          data={rowData}
          keyExtractor={item => item.id}
          renderItem={({ item }) => <TaskRow {...item} />}
          contentContainerStyle={{ paddingHorizontal: 16, paddingBottom: 24 }}
        />
      </View>
    </KeyboardAvoidingView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1 },
  form: { padding: 16, gap: 12 },
  input: { borderRadius: 12 },
  createBtn: { marginTop: 8, borderRadius: 12 },
  listWrap: { flex: 1, paddingTop: 8 },
  sectionTitle: { marginLeft: 16, marginBottom: 8, fontWeight: '600' },
  segmentWrap: { flexDirection: 'row', gap: 8, justifyContent: 'space-between' },
  segmentItem: { flex: 1, borderRadius: 10, borderWidth: 1, borderColor: '#E0E0E0', paddingVertical: 10, alignItems: 'center' },
  segmentActive: { backgroundColor: '#F6F2EA', borderColor: '#D6C9B3' },
  segmentText: { fontWeight: '600' },
  segmentTextActive: { fontWeight: '700' },
});
