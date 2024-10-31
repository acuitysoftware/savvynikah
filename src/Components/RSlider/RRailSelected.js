import React, { memo } from 'react';
import {StyleSheet, View} from 'react-native';
import { useTheme } from 'react-native-basic-elements';

const RRailSelected = () => {
  const colors = useTheme()
  return (
    <View style={{...styles.root,
      backgroundColor:'rgba(2,142,0,255)',
    }}/>
  );
};

export default memo(RRailSelected);

const styles = StyleSheet.create({
  root: {
    height: 6,
    borderRadius: 4,
  },
});