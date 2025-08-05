import React from 'react';
import { View, Text, Image, StyleSheet, ImageSourcePropType } from 'react-native';

type Props = {
  uri: ImageSourcePropType;
  label: string;
};

export default function Avatar({ uri, label }: Props) {
  return (
    <View style={styles.wrapper}>
      <Image source={uri} style={styles.avatar} resizeMode="cover" />
      <Text style={styles.label}>{label}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  wrapper: {
    alignItems: 'center',
    marginRight: 12,
  },
  avatar: {
    width: 80,
    height: 80,
    borderRadius: 40,
    backgroundColor: '#eee',
    margin: 5,
  },
  label: {
    marginTop: 4,
    fontSize: 12,
    color: '#333',
    
  },
});
