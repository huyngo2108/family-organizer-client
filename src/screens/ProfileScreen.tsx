import React from 'react';
import { View, StyleSheet, Text, Image, TouchableOpacity } from 'react-native';
import { useTheme } from 'react-native-paper';
import spacing from '../theme/spacing';

export default function ProfileScreen() {
  const { colors } = useTheme();

  return (
    <View style={[styles.container, { backgroundColor: colors.background }]}>
      <View style={styles.headerTabs}>
        <Text style={styles.tabText}>Friends</Text>
        <Text style={[styles.tabText, styles.activeTab]}>Profile</Text>
        <Text style={styles.tabText}>Setting</Text>
      </View>

      <View style={styles.profileContainer}>
        <View style={styles.avatarInfoWrapper}>
          <Image
            source={require('../../assets/images/profile.png')}
            style={styles.avatar}
          />
          <View style={styles.infoTextWrapper}>
            <Text style={styles.name}>YOUR NAME</Text>
            <Text style={styles.email}>name01@example.com</Text>
          </View>
        </View>

        <View style={styles.infoBox}>
          <Text style={styles.infoItem}>
            • <Text style={styles.label}>Full Name</Text>  Your FullName
          </Text>
          <Text style={styles.infoItem}>
            • <Text style={styles.label}>Phone</Text>  0123456789
          </Text>
          <Text style={styles.infoItem}>
            • <Text style={styles.label}>Address</Text>  Bay Area, Francisco, CA
          </Text>
        </View>

        <TouchableOpacity style={styles.editButton}>
          <Text style={styles.editButtonText}>Edit Your Profile</Text>
        </TouchableOpacity>
      </View>

      <TouchableOpacity>
        <Text style={styles.logoutText}>↩ Logout your account</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: spacing.lg,
  },
  headerTabs: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    paddingBottom: spacing.sm,
    marginBottom: spacing.sm,
    marginTop: 38,
  },
  tabText: {
    fontSize: 16,
    color: '#666',
  },
  activeTab: {
    fontWeight: 'bold',
    color: '#000',
    borderBottomWidth: 2,
    borderColor: '#000',
    paddingBottom: spacing.xs,
  },
  profileContainer: {
    borderTopWidth: 1,
    borderBottomWidth: 1,
    borderColor: '#ddd',
    paddingVertical: spacing.lg,
    alignItems: 'center',
  },
  avatarInfoWrapper: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: spacing.md,
  },
  avatar: {
    width: 80,
    height: 80,
    borderRadius: 40,
    marginRight: spacing.md,
  },
  infoTextWrapper: {
    justifyContent: 'center',
  },
  name: {
    fontSize: 16,
    fontWeight: '700',
  },
  email: {
    fontSize: 14,
    color: '#666',
  },
  infoBox: {
    borderWidth: 1,
    borderRadius: 8,
    borderColor: '#ccc',
    padding: spacing.md,
    width: '100%',
    backgroundColor: '#fff',
    marginBottom: spacing.md,
  },
  infoItem: {
    fontSize: 14,
    marginBottom: spacing.sm,
  },
  label: {
    fontWeight: 'bold',
  },
  editButton: {
    backgroundColor: '#eee',
    paddingVertical: spacing.sm,
    paddingHorizontal: spacing.md,
    borderRadius: 6,
    elevation: 2,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.3,
    shadowRadius: 2,
  },
  editButtonText: {
    fontWeight: '600',
    color: '#333',
  },
  logoutText: {
    marginTop: spacing.lg,
    fontSize: 14,
    color: '#444',
    marginLeft: spacing.sm,
  },
});
