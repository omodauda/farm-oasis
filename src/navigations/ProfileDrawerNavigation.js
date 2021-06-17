import React from 'react';
import {createDrawerNavigator} from '@react-navigation/drawer';

// screens
import SettingsScreen from '@screens/MainScreens/DrawerScreens/SettingsScreen';

const Drawer = createDrawerNavigator();

export default function () {
  return (
    <Drawer.Navigator>
      <Drawer.Screen name="Settings" component={SettingsScreen} />
    </Drawer.Navigator>
  );
}
