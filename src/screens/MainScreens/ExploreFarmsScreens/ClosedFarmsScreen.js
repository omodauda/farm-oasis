import React from 'react';
import {View, FlatList, StyleSheet} from 'react-native';
import FarmItem from '@components/FarmItem';
import {FARMS} from '@data/index';

export default function ClosedFarmsScreen() {
  const closedFarms = FARMS.filter(farm => farm.status === 'closed');
  return (
    <View style={styles.screen}>
      <FlatList
        data={closedFarms}
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
