import React from 'react';
import { View, FlatList, Text } from 'react-native';
import { useTheme, IconButton } from 'react-native-paper';

import { useSettingsScreenStyles } from '../styles/screens/SettingsScreen.styles';
import spacing from '../theme/spacing';

const settingsOptions = [
  { icon: 'account', label: 'Profile' },
  { icon: 'share-variant', label: 'Share' },
  { icon: 'bell-outline', label: 'Notification' },
  { icon: 'web', label: 'Language' },
  { icon: 'theme-light-dark', label: 'Theme Mode' },
  { icon: 'trash-can-outline', label: 'Clean Up Memory' },
  { icon: 'flag-outline', label: 'Report' },
  { icon: 'logout', label: 'Log Out' },
  { icon: 'account-switch', label: 'Change Account' },
];

export default function SettingsScreen() {
  const { colors } = useTheme();
  const styles = useSettingsScreenStyles();

  const renderItem = ({ item }: any) => (
    <View style={styles.row}>
      <IconButton icon={item.icon} />
      <Text style={styles.label}>{item.label}</Text>
    </View>
  );

  return (
    <View style={[styles.container, { backgroundColor: colors.background }]}>
      <FlatList
        data={settingsOptions}
        keyExtractor={(item) => item.label}
        renderItem={renderItem}
        contentContainerStyle={{ padding: spacing.md }}
      />
    </View>
  );
}
