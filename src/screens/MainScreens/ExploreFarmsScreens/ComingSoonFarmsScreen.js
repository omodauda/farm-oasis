import React from 'react';
import {View, FlatList, StyleSheet} from 'react-native';
import FarmItem from '@components/FarmItem';
import {FARMS} from '@data/index';

export default function ComingSoonFarmsScreen() {
  const comingSoonFarms = FARMS.filter(farm => farm.status === 'coming soon');
  return (
    <View style={styles.screen}>
      <FlatList
        data={comingSoonFarms}
        keyExtractor={item => item.id}
        renderItem={({item}) => <FarmItem item={item} />}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    backgroundColor: 'white',
  },
});
