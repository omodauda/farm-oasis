import React from 'react';
import {View, Text, StyleSheet} from 'react-native';

export default function OpenFarmsScreen() {
  return (
    <View style={styles.screen}>
      <Text>Open</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    backgroundColor: 'white',
  },
});
