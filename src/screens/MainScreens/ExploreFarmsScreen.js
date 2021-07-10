import React from 'react';
import {View, StyleSheet} from 'react-native';
import FocusAwareStatusBar from '@navigations/FocusAwareStatusBar';
import TopTabNavigator from '@navigations/TopTabNavigators/ExploreTopTabNavigator';

import CustomHeader from '@components/CustomHeader';

export default function ExploreFarmsScreen({navigation}) {
  return (
    <View style={styles.screen}>
      <FocusAwareStatusBar backgroundColor="white" barStyle="dark-content" />
      <CustomHeader
        navigation={navigation}
        style={styles.header}
        title="Explore Farms"
      />
      <TopTabNavigator />
    </View>
  );
}

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    backgroundColor: 'white',
    paddingTop: 45,
    paddingBottom: 55,
    paddingHorizontal: 24,
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 25,
  },
});
