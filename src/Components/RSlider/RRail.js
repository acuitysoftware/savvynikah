import React, { memo } from 'react';
import { View, StyleSheet } from 'react-native';

const RRail = () => {
  return (
    <View style={styles.root}/>
  );
};

export default memo(RRail);

const styles = StyleSheet.create({
  root: {
    flex: 1,
    height: 8,
    borderRadius: 4,
    backgroundColor:'rgba(2,142,0,255)',
  },
});