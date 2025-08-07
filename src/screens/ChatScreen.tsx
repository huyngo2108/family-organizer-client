import React, { useState } from 'react';
import {
  View,
  FlatList,
  StyleSheet,
  TextInput as RNInput,
  KeyboardAvoidingView,
  Platform,
  TouchableOpacity,
  Text,
} from 'react-native';
import { useTheme } from 'react-native-paper';

import Header from '../components/Header';
import spacing from '../theme/spacing';

export default function ChatScreen() {
  const { colors } = useTheme();
  const [messages, setMessages] = useState([
    { id: '1', text: 'Hello!', sent: false },
    { id: '2', text: 'Hi there!', sent: true },
  ]);
  const [input, setInput] = useState('');

  const send = () => {
    if (!input.trim()) return;
    setMessages([
      ...messages,
      { id: Date.now().toString(), text: input, sent: true },
    ]);
    setInput('');
  };

  return (
    <KeyboardAvoidingView
      style={[styles.container, { backgroundColor: colors.background }]}
      behavior={Platform.OS === 'ios' ? 'padding' : undefined}
    >
      <Header title="Chat" />

      <FlatList
        data={messages}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <View
            style={[
              styles.bubble,
              {
                alignSelf: item.sent ? 'flex-end' : 'flex-start',
                backgroundColor: item.sent ? colors.primary : colors.surface,
              },
            ]}
          >
            <Text
              style={{ color: item.sent ? '#fff' : colors.onSurface }}
            >
              {item.text}
            </Text>
          </View>
        )}
        contentContainerStyle={styles.chatList}
      />

      <View
        style={[styles.inputRow, { borderTopColor: colors.onSurfaceDisabled }]}
      >
        <RNInput
          style={[styles.textInput, { color: colors.onSurface }]}
          placeholder="Type a message..."
          placeholderTextColor={colors.onSurfaceDisabled}
          value={input}
          onChangeText={setInput}
        />
        <TouchableOpacity onPress={send} style={styles.sendButton}>
          <Text style={{ color: colors.primary }}>Send</Text>
        </TouchableOpacity>
      </View>
    </KeyboardAvoidingView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1 },
  chatList: { padding: spacing.md },
  bubble: {
    maxWidth: '75%',
    padding: spacing.sm,
    borderRadius: 12,
    marginVertical: spacing.xs,
  },
  inputRow: {
    flexDirection: 'row',
    alignItems: 'center',
    borderTopWidth: 1,
    padding: spacing.sm,
  },
  textInput: {
    flex: 1,
    height: 40,
    paddingHorizontal: spacing.sm,
  },
  sendButton: {
    paddingHorizontal: spacing.sm,
  },
});
