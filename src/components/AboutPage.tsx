import React, { memo } from 'react';
import { StyleSheet, Text, View } from 'react-native';

export const AboutPage = memo(() => (
  <View style={styles.root}>
    <Text>About</Text>
  </View>
));

const styles = StyleSheet.create({
  root: {
    alignItems: 'center',
    flex: 1,
    justifyContent: 'center',
  },
});
