import React, { memo } from 'react';
import { StyleSheet, Text, View } from 'react-native';

export interface RandomPageProps {
  color: string;
}

export const RandomPage = memo<RandomPageProps>(({ color }) => (
  <View style={styles.root}>
    <Text style={{ color }}>{Math.random()}</Text>
  </View>
));

const styles = StyleSheet.create({
  root: {
    alignItems: 'center',
    flex: 1,
    justifyContent: 'center',
  },
});
