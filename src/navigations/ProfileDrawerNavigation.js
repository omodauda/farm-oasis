import React from 'react';
import {createDrawerNavigator} from '@react-navigation/drawer';
import CustomDrawerContent from '@navigations/CustomDrawerContent';

// screens
import SettingsScreen from '@screens/MainScreens/DrawerScreens/SettingsScreen';

const Drawer = createDrawerNavigator();

export default function () {
  return (
    <Drawer.Navigator
      drawerContent={props => <CustomDrawerContent {...props} />}>
      <Drawer.Screen name="Settings" component={SettingsScreen} />
    </Drawer.Navigator>
  );
}
