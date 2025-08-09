import React from 'react';
import { View, Text, Image, TouchableOpacity } from 'react-native';
import { useTheme } from 'react-native-paper';

import { useProfileScreenStyles } from '../styles/screens/ProfileScreen.styles';

export default function ProfileScreen() {
  const { colors } = useTheme();
  const styles = useProfileScreenStyles();

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
