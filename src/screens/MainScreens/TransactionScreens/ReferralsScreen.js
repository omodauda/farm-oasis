import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
} from 'react-native';
import Colors from '@constants/Colors';
import Icon from 'react-native-vector-icons/MaterialIcons';

export default function ReferralsScreen() {
  return (
    <View style={styles.screen}>
      <ScrollView style={styles.scrollView}>
        <View style={styles.header}>
          <Text style={styles.headerText}>Invite Friends</Text>
          <Text style={styles.referText}>VIEW ALL REFERRALS</Text>
        </View>
        <View style={styles.referral}>
          <Text style={styles.referralText}>Referral Code</Text>
          <Text style={styles.code}>ANDR1234</Text>
          <TouchableOpacity style={styles.copyBtn}>
            <Text style={styles.copyText}>COPY CODE</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.invite}>
          <Text style={styles.inviteText}>Get 2%</Text>
          <Text style={styles.inviteInfo}>
            of your invites's first investment on the platform
          </Text>
        </View>
        <Text style={styles.instructionText}>
          They should use the referral code upon creation of account
        </Text>
        <View style={styles.share}>
          <Icon name="share" size={32} color={Colors.primary} />
          <Text style={styles.shareText}>SHARE CODE</Text>
        </View>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    backgroundColor: Colors.primary,
  },
  scrollView: {
    backgroundColor: 'white',
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
    marginTop: 20,
    paddingVertical: 32,
    paddingHorizontal: 24,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 23,
  },
  headerText: {
    fontFamily: 'Montserrat-Regular',
    fontWeight: '400',
    fontSize: 14,
    color: Colors.text,
  },
  referText: {
    fontFamily: 'Montserrat-Regular',
    fontWeight: '400',
    fontSize: 14,
    color: Colors.primary,
  },
  referral: {
    backgroundColor: '#F4F5F5',
    paddingTop: 15,
    marginBottom: 50,
  },
  referralText: {
    fontFamily: 'Montserrat-Regular',
    fontWeight: '400',
    fontSize: 14,
    color: Colors.primary,
    marginBottom: 32,
  },
  code: {
    fontFamily: 'Montserrat-Medium',
    fontWeight: '500',
    fontSize: 14,
    color: Colors.text,
    marginBottom: 11,
  },
  copyBtn: {
    backgroundColor: '#E5E5E5',
    paddingVertical: 6,
    paddingHorizontal: 5,
    alignSelf: 'flex-end',
  },
  copyText: {
    fontFamily: 'Montserrat-Bold',
    fontWeight: '700',
    fontSize: 14,
    color: Colors.text,
  },
  invite: {
    width: '60%',
    marginBottom: 28,
  },
  inviteText: {
    color: Colors.primary,
    fontFamily: 'Montserrat-Regular',
    fontWeight: '400',
    fontSize: 24,
  },
  inviteInfo: {
    fontFamily: 'Montserrat-Regular',
    fontWeight: '400',
    fontSize: 14,
    color: Colors.text,
  },
  instructionText: {
    fontFamily: 'Montserrat-Medium',
    fontWeight: '500',
    fontSize: 14,
    color: Colors.text,
    marginBottom: 72,
  },
  share: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingVertical: 17,
    paddingHorizontal: 8,
    backgroundColor: '#F4F5F5',
    marginBottom: 30,
  },
  shareText: {
    fontFamily: 'Montserrat-Bold',
    fontWeight: '600',
    fontSize: 14,
    color: Colors.primary,
  },
});
