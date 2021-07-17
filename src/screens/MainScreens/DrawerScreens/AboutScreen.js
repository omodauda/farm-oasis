import React from 'react';
import {View, Text, ScrollView, StyleSheet} from 'react-native';
import FocusAwareStatusBar from '@navigations/FocusAwareStatusBar';
import CustomHeader from '@components/CustomHeader';
import Colors from '@constants/Colors';

export default function AboutScreen({navigation}) {
  return (
    <View style={styles.screen}>
      <FocusAwareStatusBar
        backgroundColor={Colors.primary}
        barStyle="dark-content"
      />
      <CustomHeader
        title="About FarmOasis"
        navigation={navigation}
        style={styles.header}
      />
      <ScrollView style={styles.content}>
        <View style={styles.section}>
          <Text style={styles.text}>
            FarmOasis is an agricultural crowd funding app that seeks to connect
            farmers directly to investors, facilitate easy disbursement of funds
            to farmers and also help investors get back their ROI.
          </Text>
        </View>
        <View style={styles.section}>
          <Text style={styles.text}>
            FarmOasis will verify the truity of the farmers agricultural
            expertise and farming land(s). Then selected farmers will get to be
            onboarded on the platform having filled some documents online, like
            BVN and provision of two guarantors.
          </Text>
        </View>
        <View style={styles.section}>
          <Text style={styles.text}>
            Investors will get periodic updates on their investments as we have
            staff to help farmers with the upload of pictorial evidences of work
            progress.
          </Text>
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
    backgroundColor: Colors.primary,
    paddingHorizontal: 24,
    paddingTop: 33,
    paddingBottom: 39,
  },
  content: {
    paddingVertical: 30,
  },
  section: {
    backgroundColor: '#F4F5F5',
    paddingVertical: 7,
    paddingHorizontal: 24,
    borderRadius: 2,
    marginBottom: 10,
  },
  text: {
    fontFamily: 'Montserrat-Regular',
    fontWeight: '400',
    fontSize: 18,
    color: Colors.text,
  },
});
