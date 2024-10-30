import React, { memo } from 'react';
import { View, StyleSheet } from 'react-native';
import { useTheme } from 'react-native-basic-elements';

const THUMB_RADIUS_LOW = 9;
const THUMB_RADIUS_HIGH = 9;

const RThumb = ({ name }) => {
  const colors = useTheme()
  return <View style={name === 'high' ? styles.rootHigh : styles.rootLow} />;
};

const styles = StyleSheet.create({
  rootLow: {
    width: THUMB_RADIUS_LOW * 2,
    height: THUMB_RADIUS_LOW * 2,
    borderRadius: THUMB_RADIUS_LOW,
    borderWidth: 2,
    borderColor: '#CC002F',
    backgroundColor: '#CC002F',
  },
  // rootHigh: {
  //   width: THUMB_RADIUS_HIGH * 2,
  //   height: THUMB_RADIUS_HIGH * 2,
  //   borderRadius: THUMB_RADIUS_HIGH,
  //   borderWidth: 2,
  //   borderColor: '#ECBEC8',
  //   backgroundColor: '#fff',
  // },
});

export default memo(RThumb);