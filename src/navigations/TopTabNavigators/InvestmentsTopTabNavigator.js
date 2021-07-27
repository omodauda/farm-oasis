import React from 'react';
import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';
import Colors from '@constants/Colors';
import {Dimensions} from 'react-native';
// screens
import OngoingScreen from '@screens/MainScreens/InvestmentsScreens/OngoingScreen';
import PaidOutScreen from '@screens/MainScreens/InvestmentsScreens/PaidOutScreen';
import HistoryScreen from '@screens/MainScreens/InvestmentsScreens/History';

const Tab = createMaterialTopTabNavigator();

const {width} = Dimensions.get('window');
const DEVICE_WIDTH = width;

export default function () {
  return (
    <Tab.Navigator
      tabBarOptions={{
        indicatorStyle: {
          backgroundColor: '#C4C4C4',
          height: 30,
        },
        tabStyle: {
          backgroundColor: Colors.primary,
          paddingHorizontal: 24,
          marginBottom: 5,
        },
        labelStyle: {
          fontFamily: 'Montserrat-Medium',
          fontWeight: '500',
          fontSize:
            DEVICE_WIDTH <= 240
              ? 10
              : DEVICE_WIDTH > 240 && DEVICE_WIDTH <= 360
              ? 12
              : 14,
          color: Colors.text,
        },
      }}>
      <Tab.Screen name="Ongoing" component={OngoingScreen} />
      <Tab.Screen name="PaidOut" component={PaidOutScreen} />
      <Tab.Screen name="History" component={HistoryScreen} />
    </Tab.Navigator>
  );
}
