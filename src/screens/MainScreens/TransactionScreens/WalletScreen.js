import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
} from 'react-native';
import Colors from '@constants/Colors';

export default function WalletScreen({navigation}) {
  return (
    <ScrollView style={styles.screen}>
      <View style={styles.balance}>
        <Text style={styles.title}>
          Current Balance: <Text style={styles.amount}>₦ 0</Text>
        </Text>
        <View style={styles.linkContainer}>
          <Text
            onPress={() =>
              navigation.navigate('Home', {screen: 'ExploreFarms'})
            }
            style={styles.link}>
            Fund A Farm
          </Text>
          {/* <Text style={styles.link}>Be Updated</Text> */}
        </View>
      </View>
      <View style={styles.absoluteView}>
        <Text style={styles.headerText}>Fund wallet via bank transfer</Text>
        <Text style={styles.headerBody}>
          You can now fund your wallet by simply making a bank or online
          transfer to a unique account number.
        </Text>
        <View style={styles.buttonContainer}>
          <TouchableOpacity
            style={styles.depositButton}
            onPress={() => navigation.navigate('DepositFund')}>
            <Text style={styles.buttonText}>Deposit Funds</Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => navigation.navigate('WithdrawFund')}
            style={styles.withdrawButton}>
            <Text style={styles.buttonText}>Withdraw Funds</Text>
          </TouchableOpacity>
        </View>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    backgroundColor: 'white',
  },
  balance: {
    backgroundColor: Colors.primary,
    paddingTop: 42,
    paddingBottom: 77,
  },
  title: {
    fontFamily: 'Montserrat-Bold',
    fontWeight: '600',
    fontSize: 20,
    color: 'white',
    marginBottom: 16,
    textAlign: 'center',
  },
  amount: {
    fontFamily: 'Montserrat-Medium',
    fontWeight: '500',
    fontSize: 20,
    color: '#055E68',
  },
  linkContainer: {
    width: '70%',
    flexDirection: 'row',
    alignSelf: 'center',
    justifyContent: 'space-around',
  },
  link: {
    fontFamily: 'Montserrat-SemiBold',
    fontWeight: '600',
    fontSize: 18,
    color: '#006838',
    textDecorationLine: 'underline',
  },
  absoluteView: {
    width: '86%',
    backgroundColor: 'white',
    alignSelf: 'center',
    paddingTop: 35,
    position: 'relative',
    bottom: 20,
    marginBottom: 90,
  },
  headerText: {
    fontFamily: 'Montserrat-SemiBold',
    fontWeight: '600',
    fontSize: 20,
    color: Colors.text,
    marginBottom: 16,
    textAlign: 'center',
  },
  headerBody: {
    fontFamily: 'Montserrat-Regular',
    fontWeight: '400',
    fontSize: 16,
    color: Colors.text,
    textAlign: 'center',
    marginBottom: 26,
  },
  buttonContainer: {},
  depositButton: {
    width: '100%',
    backgroundColor: 'rgba(0, 226, 63, 0.5)',
    paddingVertical: 15,
    alignItems: 'center',
    marginBottom: 10,
  },
  withdrawButton: {
    width: '100%',
    paddingVertical: 15,
    backgroundColor: '#E5E5E5',
    alignItems: 'center',
  },
  buttonText: {
    fontFamily: 'Montserrat-Medium',
    fontWeight: '500',
    fontSize: 24,
    color: Colors.text,
  },
});
