import React from 'react';
import { Dimensions, Image, StyleSheet, View, Text, ViewStyle, StyleProp } from 'react-native';
import { BlurView } from '@react-native-community/blur';

const { width } = Dimensions.get('window');
const bannerImage = require('../../assets/images/banner.png');

type Props = {
  style?: StyleProp<ViewStyle>;
};

export default function BannerCarousel({ style }: Props) {
  return (
    <View style={[styles.shadowWrapper, style]}>
      <View style={styles.wrapper}>
        <Image source={bannerImage} style={styles.image} resizeMode="cover" />
        <BlurView style={StyleSheet.absoluteFill} blurType="light" blurAmount={1} />
        <Text style={styles.title}>Household Task</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  shadowWrapper: {
    alignSelf: 'center',
    borderRadius: 16,
    shadowColor: '#000',
    shadowOffset: { width: 2, height: 4 },
    shadowOpacity: 0.25,
    shadowRadius: 6,
    elevation: 4, 
  },
  wrapper: {
    width: width * 0.9,
    height: 160,
    borderRadius: 16,
    overflow: 'hidden',
    position: 'relative',
  },
  image: {
    width: '100%',
    height: '100%',
  },
  title: {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: [{ translateX: -width * 0.4 }, { translateY: -16 }],
    color: '#484947',
    fontSize: 35,
    fontWeight: 'bold',
    textAlign: 'center',
    width: width * 0.8,
  },
});
