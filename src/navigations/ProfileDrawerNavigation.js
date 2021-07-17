import React from 'react';
import {createDrawerNavigator} from '@react-navigation/drawer';
import CustomDrawerContent from '@navigations/CustomDrawerContent';

// screens
// import SettingsScreen from '@screens/MainScreens/DrawerScreens/SettingsScreen';
import PersonalDataScreen from '@screens/MainScreens/DrawerScreens/PersonalDataScreen';
import ChangePasswordScreen from '@screens/MainScreens/DrawerScreens/ChangePasswordScreen';
import AboutScreen from '@screens/MainScreens/DrawerScreens/AboutScreen';

const Drawer = createDrawerNavigator();

export default function () {
  return (
    <Drawer.Navigator
      overlayColor="rgba(196, 196, 196, 0.75)"
      drawerContent={props => <CustomDrawerContent {...props} />}>
      {/* <Drawer.Screen name="Settings" component={SettingsScreen} /> */}
      <Drawer.Screen name="PersonalData" component={PersonalDataScreen} />
      <Drawer.Screen name="ChangePassword" component={ChangePasswordScreen} />
      <Drawer.Screen name="About" component={AboutScreen} />
    </Drawer.Navigator>
  );
}
