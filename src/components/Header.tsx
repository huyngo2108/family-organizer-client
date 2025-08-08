import React from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native';
import { useTheme } from 'react-native-paper';

interface HeaderProps {
  title: string;
  onBellPress?: () => void; 
}

export default function Header({ title, onBellPress }: HeaderProps) {
  const { colors } = useTheme();

  return (
    <View style={[styles.container, { backgroundColor: colors.background }]}>
      <Image
        source={require('../../assets/images/logo.png')}
        style={styles.logo}
        resizeMode="contain"
      />
      <Text style={styles.title}>{title}</Text>
      
      <TouchableOpacity onPress={onBellPress}>
        <Image
          source={require('../../assets/images/bell.png')}
          style={styles.bell}
          resizeMode="contain"
        />
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingTop: 50,
    paddingBottom: 16,
    paddingHorizontal: 20,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  logo: {
    width: 42,
    height: 42,
    borderRadius: 20,
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  bell: {
    width: 32,
    height: 32,
  },
});
