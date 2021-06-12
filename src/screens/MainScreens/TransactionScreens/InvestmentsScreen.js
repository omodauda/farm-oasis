import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import Colors from '@constants/Colors';
import TopTabNavigator from '@navigations/TopTabNavigators/InvestmentsTopTabNavigator';

export default function InvestmentsScreen() {
  return (
    <View style={styles.screen}>
      <View style={styles.header}>
        <Text style={styles.headerText}>
          Keep track of your investment and watch your money grow
        </Text>
      </View>
      <TopTabNavigator />
    </View>
  );
}

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    backgroundColor: 'white',
  },
  header: {
    backgroundColor: Colors.primary,
    paddingHorizontal: 25,
    paddingTop: 24,
    paddingBottom: 40,
  },
  headerText: {
    fontFamily: 'Montserrat-Medium',
    fontWeight: '500',
    fontSize: 16,
    color: '#055E68',
  },
});
