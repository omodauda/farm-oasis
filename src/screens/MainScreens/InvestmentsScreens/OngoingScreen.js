import React from 'react';
import {View, Text, StyleSheet} from 'react-native';

export default function OngoingScreen() {
  return (
    <View style={styles.screen}>
      <Text>Ongoing Screen</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    backgroundColor: 'white',
  },
});
