import React from 'react';
import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';
import Colors from '@constants/Colors';
import {Dimensions} from 'react-native';

// screens
import WalletScreen from '@screens/MainScreens/TransactionScreens/WalletScreen';
import InvestmentsScreen from '@screens/MainScreens/TransactionScreens/InvestmentsScreen';
import ReferralsScreen from '@screens/MainScreens/TransactionScreens/ReferralsScreen';

const Tab = createMaterialTopTabNavigator();

const {width} = Dimensions.get('window');
const DEVICE_WIDTH = width;

export default function () {
  return (
    <Tab.Navigator
      tabBarOptions={{
        renderIndicator: () => null,
        style: {
          elevation: 0,
        },
        tabStyle: {
          paddingHorizontal: 0,
          paddingVertical: 0,
          backgroundColor: Colors.primary,
        },
        activeTintColor: '#055E68',
        inactiveTintColor: 'white',
        labelStyle: {
          fontFamily: 'Montserrat-SemiBold',
          fontWeight: '600',
          fontSize:
            DEVICE_WIDTH <= 240
              ? 12
              : DEVICE_WIDTH > 240 && DEVICE_WIDTH <= 360
              ? 14
              : 16,
        },
      }}>
      <Tab.Screen name="Wallet" component={WalletScreen} />
      <Tab.Screen name="Investments" component={InvestmentsScreen} />
      <Tab.Screen name="Referrals" component={ReferralsScreen} />
    </Tab.Navigator>
  );
}
