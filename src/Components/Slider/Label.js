import React, { memo } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { useTheme } from 'react-native-basic-elements';

const Label = ({ text, ...restProps }) => {
  const colors = useTheme()
  return (
    <View style={{...styles.root,
      backgroundColor: colors.primaryThemeColor,
    }} {...restProps}>
      <Text style={styles.text}>{text}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  root: {
    alignItems: 'center',
    padding: 8,
    borderRadius: 4,
  },
  text: {
    fontSize: 16,
    color: '#fff',
  },
});

export default memo(Label);