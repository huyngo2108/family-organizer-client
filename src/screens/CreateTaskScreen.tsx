import React, { useState } from 'react';
import {
  View,
  ScrollView,
  KeyboardAvoidingView,
  Platform,
  Text,
  TouchableOpacity,
  Image,
  TextInput as RNTextInput,
} from 'react-native';
import { useTheme, TextInput, Button, Divider } from 'react-native-paper';

import { useCreateTaskScreenStyles } from '../styles/screens/CreateTaskScreen.styles';

interface Task {
  name: string;
  deadline: string;
  priority: string;
  description: string;
  assignedTo: string;
}

export default function CreateTaskScreen() {
  const { colors } = useTheme();
  const styles = useCreateTaskScreenStyles();

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

        <Button
          mode="contained"
          onPress={handleCreateTask}
          style={styles.saveButton}
          labelStyle={styles.saveButtonLabel}
        >
          Create Task
        </Button>

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
