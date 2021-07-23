import React from 'react';
import {useSelector} from 'react-redux';
import {View, StyleSheet} from 'react-native';
import PaystackWebView from 'react-native-paystack-webview';
import {paystackKey} from '@env';
import Colors from '@constants/Colors';

export default function Fund({amount}) {
  const user = useSelector(state => state.auth.user);
  const {email, phone, firstName, lastName} = user;
  const payRef = () => {
    return Math.floor(Math.random() * 1000000000 + 1);
  };
  return (
    <View style={styles.button}>
      <PaystackWebView
        showPayButton={true}
        buttonText="Fund"
        textStyles={styles.buttonText}
        paystackKey={paystackKey}
        amount={amount}
        billingEmail={email}
        billingMobile={phone}
        billingName={`${firstName} ${lastName}`}
        ActivityIndicatorColor="green"
        refNumber={payRef()}
        onCancel={e => {
          // handle response here
        }}
        onSuccess={res => {
          // handle response here
          console.log(res);
        }}
        autoStart={false}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  button: {
    borderRadius: 6,
    paddingHorizontal: 15,
    paddingVertical: 7,
    backgroundColor: Colors.primary,
    elevation: 5,
    shadowColor: 'rgba(17, 17, 17, 0.25)',
  },
  buttonText: {
    fontFamily: 'Montserrat-Medium',
    fontWeight: '500',
    fontSize: 14,
    color: 'white',
  },
});
