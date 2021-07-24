import React from 'react';
import {View, FlatList, StyleSheet} from 'react-native';
import FarmItem from '@components/FarmItem';

export default function FarmList({data, navigation}) {
  const handleClick = id => {
    navigation.navigate('FarmDetails', {farmId: id});
  };
  return (
    <View style={styles.screen}>
      <FlatList
        data={data}
        keyExtractor={item => item.id}
        renderItem={({item}) => (
          <FarmItem item={item} onPress={() => handleClick(item.id)} />
        )}
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
