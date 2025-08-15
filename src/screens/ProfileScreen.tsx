import React from 'react';
import { View, Text, Image, TouchableOpacity, Alert } from 'react-native';
import { useTheme } from 'react-native-paper';

import { useProfileScreenStyles } from '../styles/screens/ProfileScreen.styles';
import { useAuth } from '../context/AuthContext';

export default function ProfileScreen() {
  const { colors } = useTheme();
  const styles = useProfileScreenStyles();
  const { logout, user } = useAuth();

  const onLogout = () => {
    Alert.alert(
      'Logout',
      'Are you sure you want to log out?',
      [
        { text: 'Cancel', style: 'cancel' },
        {
          text: 'Logout',
          style: 'destructive',
          onPress: () => logout(),
        },
      ],
      { cancelable: true }
    );
  };

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
            <Text style={styles.name}>{user?.fullName || 'YOUR NAME'}</Text>
            <Text style={styles.email}>{user?.email || 'name01@example.com'}</Text>
          </View>
        </View>

        <View style={styles.infoBox}>
          <Text style={styles.infoItem}>
            • <Text style={styles.label}>Full Name</Text>  {user?.fullName || 'Your FullName'}
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

      <TouchableOpacity onPress={onLogout} accessibilityRole="button" accessibilityLabel="Logout">
        <Text style={styles.logoutText}>↩ Logout your account</Text>
      </TouchableOpacity>
    </View>
  );
}
