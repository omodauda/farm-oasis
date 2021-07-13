import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';

// Screens
import TransactionsScreen from '@screens/MainScreens/TransactionScreens/TransactionsScreen';
import DepositFundScreen from '@screens/MainScreens/TransactionScreens/DepositFundScreen';

const Stack = createStackNavigator();

export default function TransactionStack() {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}>
      <Stack.Screen name="Trnx" component={TransactionsScreen} />
      <Stack.Screen name="DepositFund" component={DepositFundScreen} />
    </Stack.Navigator>
  );
}
