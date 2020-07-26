import React, { memo } from 'react';
import { Button, StyleSheet, Text, View } from 'react-native';
import { useNav } from 'rnn-hooks';

import { RandomScreen } from '@/src/screens/RnadomScreen';

export const HomePage = memo(() => {
  const nav = useNav();

  const handlePush = () => {
    nav.push(RandomScreen, { color: 'red' });
  };

  const handleModal = () => {
    nav.showModal(RandomScreen, { color: 'green' });
  };

  return (
    <View style={styles.root}>
      <Text style={styles.spacing}>Home</Text>
      <Button title={'Push Random Screen'} onPress={handlePush} />
      <View style={styles.spacing} />
      <Button title={'Show Random Modal'} onPress={handleModal} />
    </View>
  );
});

const styles = StyleSheet.create({
  root: {
    alignItems: 'center',
    flex: 1,
    justifyContent: 'center',
  },
  spacing: {
    marginBottom: 12,
  },
});
