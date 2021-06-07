import React from 'react';
import {View, FlatList, StyleSheet} from 'react-native';
import {FARMS} from '@data/index';
import FarmItem from '@components/FarmItem';

export default function OpenFarmsScreen() {
  const openFarms = FARMS.filter(farm => farm.status === 'open');

  return (
    <View style={styles.screen}>
      <FlatList
        data={openFarms}
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
