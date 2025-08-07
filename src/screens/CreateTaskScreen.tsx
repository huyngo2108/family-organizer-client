import React, { useState } from 'react';
import {
  View,
  StyleSheet,
  ScrollView,
  KeyboardAvoidingView,
  Platform,
  Text,
  TouchableOpacity,
  Image,
} from 'react-native';
import { useTheme, TextInput, Button, Divider } from 'react-native-paper';

interface Task {
  name: string;
  deadline: string;
  priority: string;
  description: string;
  assignedTo: string;
}

export default function CreateTaskScreen() {
  const { colors } = useTheme();
  const [taskName, setTaskName] = useState('');
  const [deadline, setDeadline] = useState('');
  const [priority, setPriority] = useState('');
  const [description, setDescription] = useState('');
  const [assignedTo, setAssignedTo] = useState('');
  const [taskList, setTaskList] = useState<Task[]>([]);

  const handleCreateTask = () => {
    if (!taskName) return;
    const newTask: Task = {
      name: taskName,
      deadline: deadline || 'No deadline',
      priority: priority || 'Low',
      description: description || 'No notes',
      assignedTo: assignedTo || 'Unassigned',
    };
    setTaskList([newTask, ...taskList]);
    setTaskName('');
    setDeadline('');
    setPriority('');
    setDescription('');
    setAssignedTo('');
  };

  return (
    <KeyboardAvoidingView
      style={{ flex: 1, backgroundColor: colors.background }}
      behavior={Platform.OS === 'ios' ? 'padding' : undefined}
    >
      <ScrollView contentContainerStyle={styles.container}>

        {/* Custom Header with exact top padding (matches Home) */}
        <View style={[styles.headerCustom, { backgroundColor: colors.background }]}> 
          <TouchableOpacity onPress={() => {}}>
            <Text style={styles.backText}>{'<'} </Text>
          </TouchableOpacity>
          <Text style={styles.headerTitle}>Household Task</Text>
          <Image
            source={require('../../assets/images/logo.png')}
            style={styles.logo}
          />
        </View>

        {/* Task Form */}
        <View style={styles.formContainer}>
          <View style={styles.formRow}>
            <Text style={styles.formLabel}>Create Task</Text>
            <TextInput
              value={taskName}
              onChangeText={setTaskName}
              placeholder="Name Task"
              mode="flat"
              underlineColor="transparent"
              style={styles.textInput}
            />
          </View>

          <TouchableOpacity style={styles.formRow}>
            <Text style={styles.formLabel}>Completion Deadline</Text>
            <Text style={styles.formValue}>DD/MM/YYYY</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.formRow}>
            <Text style={styles.formLabel}>Priority</Text>
            <Text style={styles.formValue}>Select</Text>
          </TouchableOpacity>

          <View style={styles.formRow}>
            <Text style={styles.formLabel}>Description</Text>
            <TextInput
              value={description}
              onChangeText={setDescription}
              placeholder="Add Reminders"
              mode="flat"
              underlineColor="transparent"
              style={styles.textInput}
              multiline
            />
          </View>

          <TouchableOpacity style={styles.formRow}>
            <Text style={styles.formLabel}>Assigned To Members</Text>
            <Text style={styles.formValue}>member selection</Text>
          </TouchableOpacity>
        </View>

        {/* Create Task Button */}
        <Button
          mode="contained"
          onPress={handleCreateTask}
          style={styles.saveButton}
          labelStyle={styles.saveButtonLabel}
        >
          Create Task
        </Button>

        {/* Recently Created Tasks */}
        {taskList.length > 0 && (
          <View style={styles.recentTasksContainer}>
            <Text style={styles.sectionTitle}>Recently Created:</Text>
            {taskList.map((task, index) => (
              <View key={index} style={styles.taskItem}>
                <Text style={styles.taskName}>{task.name}</Text>
                <Text style={styles.taskDetail}>~ {task.deadline}</Text>
                <Text style={styles.taskDetail}>notes: {task.description}</Text>
                <Divider style={{ marginVertical: 8 }} />
              </View>
            ))}
          </View>
        )}

      </ScrollView>
    </KeyboardAvoidingView>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 16,
    paddingBottom: 40,
    flexGrow: 1,
  },
  headerCustom: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingTop: 45, 
    paddingHorizontal: 20,
    paddingBottom: 10,
  },
  backText: {
    fontSize: 22,
  },
  headerTitle: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  logo: {
    width: 36,
    height: 36,
    borderRadius: 18,
  },
  formContainer: {
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 8,
    overflow: 'hidden',
    marginTop: 16,
  },
  formRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 12,
    height: 52,
    borderBottomWidth: 1,
    borderColor: '#eee',
  },
  formLabel: {
    fontSize: 14,
    fontWeight: '500',
    color: '#333',
    flex: 1,
  },
  formValue: {
    fontSize: 14,
    color: '#888',
    flex: 1,
    textAlign: 'right',
  },
  textInput: {
    flex: 1,
    textAlign: 'right',
    backgroundColor: 'transparent',
    fontSize: 14,
    paddingVertical: 0,
    height: 52,
  },
  saveButton: {
    marginTop: 24,
    borderRadius: 12,
    backgroundColor: '#F7EEDD',
    alignSelf: 'center',
    width: '60%',
  },
  saveButtonLabel: {
    color: 'black',
    fontWeight: '600',
  },
  recentTasksContainer: {
    marginTop: 32,
  },
  sectionTitle: {
    fontSize: 16,
    fontWeight: '600',
    marginBottom: 12,
  },
  taskItem: {
    backgroundColor: '#f9f9f9',
    padding: 12,
    borderRadius: 8,
    marginBottom: 12,
  },
  taskName: {
    fontSize: 15,
    fontWeight: '600',
  },
  taskDetail: {
    fontSize: 13,
    color: '#666',
  },
});
