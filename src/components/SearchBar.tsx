import React from 'react';
import { View, TextInput, StyleSheet } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

export default function SearchBar() {
  return (
    <View style={styles.container}>
      <Icon name="magnify" size={20} color="#828282" style={styles.icon} />
      <TextInput
        placeholder="Search"
        placeholderTextColor="#828282"
        style={styles.input}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#f0f0f0', 
    borderRadius: 12,
    paddingHorizontal: 12,
    paddingVertical: 8,
    marginHorizontal: 16,
    marginBottom:12
  },
  icon: {
    marginRight: 8,
  },
  input: {
    flex: 1,
    fontSize: 16,
    color: '#000000ff',
  },
});
