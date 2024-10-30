import React, { memo } from 'react';
import { View, StyleSheet } from 'react-native';
import { useTheme } from 'react-native-basic-elements';

const RNotch = props => {
  const colors = useTheme()
  return (
    <View style={{...styles.root,
      borderTopColor: colors.primaryThemeColor,}} {...props}/>
  );
};

export default memo(RNotch);

const styles = StyleSheet.create({
  root: {
    width: 8,
    height: 8,
    borderLeftColor: 'transparent',
    borderRightColor: 'transparent',
    
    borderLeftWidth: 4,
    borderRightWidth: 4,
    borderTopWidth: 8,
  },
});