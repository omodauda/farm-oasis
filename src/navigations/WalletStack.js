import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';

// Wallet Stack Screens
import WalletScreen from '@screens/MainScreens/TransactionScreens/WalletScreen';
import DepositFundScreen from '@screens/MainScreens/TransactionScreens/WalletStackScreens/DepositFundScreen';

const Stack = createStackNavigator();

export default function WalletStack() {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}>
      <Stack.Screen name="Wallet" component={WalletScreen} />
      <Stack.Screen name="DepositFund" component={DepositFundScreen} />
    </Stack.Navigator>
  );
}
