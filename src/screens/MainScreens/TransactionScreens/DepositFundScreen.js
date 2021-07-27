import React from 'react';
import {View, StyleSheet, StatusBar, ScrollView} from 'react-native';
import CustomHeader from '@components/CustomHeader';
import Card from '@components/Card';
import Colors from '@constants/Colors';
import Ionicons from 'react-native-vector-icons/Ionicons';
import Octicons from 'react-native-vector-icons/Octicons';

export default function DepositFundScreen({navigation}) {
  return (
    <View style={styles.screen}>
      <StatusBar backgroundColor={Colors.primary} barStyle="dark-content" />
      <CustomHeader
        style={styles.header}
        navigation={navigation}
        title="Deposit Funds"
      />

      <ScrollView
        style={styles.centeredView}
        showsVerticalScrollIndicator={false}>
        {/* eslint-disable-next-line react-native/no-inline-styles*/}
        <View style={{...styles.cardView, marginBottom: 31}}>
          <Card
            title="Fund wallet via bank transfer"
            text="Fund your wallet by simply making a bank or online transfer to a
            unique account number.">
            <Ionicons
              name="chevron-forward-sharp"
              size={50}
              color="black"
              onPress={() => navigation.navigate('BankTransfer')}
            />
          </Card>
        </View>
        {/* eslint-disable-next-line react-native/no-inline-styles*/}
        <View style={{...styles.cardView, marginBottom: 59}}>
          <Card
            title="Fund wallet via card"
            text="Fund your wallet directly with your debit card">
            <Octicons
              name="plus"
              size={50}
              color="white"
              onPress={() => navigation.navigate('CardDeposit')}
            />
          </Card>
        </View>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    backgroundColor: 'white',
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 24,
    backgroundColor: Colors.primary,
    paddingTop: 33,
    paddingBottom: 224,
  },
  centeredView: {
    alignSelf: 'center',
    position: 'relative',
    bottom: 150,
    paddingHorizontal: 24,
    marginBottom: -150,
  },
});
