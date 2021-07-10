import React from 'react';
import {View, StyleSheet} from 'react-native';
import FocusAwareStatusBar from '@navigations/FocusAwareStatusBar';
import Colors from '@constants/Colors';
import TopTabNavigator from '@navigations/TopTabNavigators/TransactionsTopTabNavigator';

import CustomHeader from '@components/CustomHeader';

export default function TransactionsScreen({navigation}) {
  return (
    <View style={styles.screen}>
      <FocusAwareStatusBar
        backgroundColor={Colors.primary}
        barStyle="dark-content"
      />
      <CustomHeader
        navigation={navigation}
        style={styles.header}
        title="Transactions"
      />
      <TopTabNavigator />
    </View>
  );
}

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    backgroundColor: Colors.primary,
    paddingTop: 45,
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 24,
    marginBottom: 5,
  },
});
