import React from 'react';
import {View, Text} from 'react-native';
import FocusAwareStatusBar from '@navigations/FocusAwareStatusBar';
import Colors from '@constants/Colors';

export default function SettingsScreen() {
  return (
    <View>
      <FocusAwareStatusBar
        barStyle="dark-content"
        backgroundColor={Colors.primary}
      />
      <Text>Settings</Text>
    </View>
  );
}
