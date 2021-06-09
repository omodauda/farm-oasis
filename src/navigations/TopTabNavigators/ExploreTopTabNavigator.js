import React from 'react';
import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';
import Colors from '@constants/Colors';

// Top tab screens
import OpenFarmsScreen from '@screens/MainScreens/ExploreFarmsScreens/OpenFarmsScreen';
import ClosedFarmsScreen from '@screens/MainScreens/ExploreFarmsScreens/ClosedFarmsScreen';
import ComingSoonFarmsScreen from '@screens/MainScreens/ExploreFarmsScreens/ComingSoonFarmsScreen';

const Tab = createMaterialTopTabNavigator();

export default function () {
  return (
    <Tab.Navigator
      tabBarOptions={{
        indicatorStyle: {
          backgroundColor: Colors.primary,
        },
        tabStyle: {
          paddingHorizontal: 0,
          paddingVertical: 0,
        },
        labelStyle: {
          fontFamily: 'Montserrat-Regular',
          fontWeight: '400',
          fontSize: 12,
          color: Colors.text,
        },
      }}>
      <Tab.Screen name="Open" component={OpenFarmsScreen} />
      <Tab.Screen name="Closed" component={ClosedFarmsScreen} />
      <Tab.Screen name="Coming Soon" component={ComingSoonFarmsScreen} />
    </Tab.Navigator>
  );
}
