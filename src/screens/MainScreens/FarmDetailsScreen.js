import React from 'react';
import {
  View,
  Text,
  Image,
  ScrollView,
  StyleSheet,
  TouchableWithoutFeedback,
} from 'react-native';
import FocusAwareStatusBar from '@navigations/FocusAwareStatusBar';
import CustomHeader from '@components/CustomHeader';
import Colors from '@constants/Colors';

export default function FarmDetailsScreen({navigation}) {
  return (
    <View style={styles.screen}>
      <FocusAwareStatusBar backgroundColor="white" barStyle="dark-content" />
      <CustomHeader
        navigation={navigation}
        style={styles.header}
        title="Tomato Farm"
      />
      <ScrollView>
        <View style={styles.imgContainer}>
          <Image
            style={styles.image}
            source={require('@assets/images/farms/tomato.png')}
          />
        </View>
        <View style={styles.details}>
          <Text style={styles.title}>Description</Text>
          <Text style={styles.description}>
            Tomatoes are the major dietary source of the antioxidant lycopene,
            which has been linked to many health benefits, including reduced
            risk of heart diseases and cancer. They are also a great source of
            vitamin C, potassium, folate and vitamin K. Tomatoes are juicy and
            sweet, full of antioxidants, and may help fight several diseases.
          </Text>
          <View style={styles.section}>
            <Text style={styles.amountLabel}>Cost</Text>
            <Text style={styles.info}>$50,000/unit</Text>
          </View>
          <View style={styles.section}>
            <Text style={styles.label}>Duration</Text>
            <Text style={styles.info}>4 Months</Text>
          </View>
          <View style={styles.section}>
            <Text style={styles.label}>Return on investment</Text>
            <Text style={styles.primaryText}>10%</Text>
          </View>

          <View style={styles.footer}>
            <Text style={styles.primaryText}>SHARE WITH A FRIEND</Text>
            <TouchableWithoutFeedback>
              <View style={styles.button}>
                <Text style={styles.primaryText}>FUND</Text>
              </View>
            </TouchableWithoutFeedback>
          </View>
        </View>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    backgroundColor: 'white',
    paddingTop: 45,
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 25,
    paddingHorizontal: 24,
  },
  imgContainer: {
    width: '100%',
    height: 223,
    minHeight: '27%',
    overflow: 'hidden',
  },
  image: {
    width: '100%',
    height: '100%',
  },
  details: {
    paddingHorizontal: 24,
    paddingVertical: 12,
  },
  title: {
    fontFamily: 'Montserrat-SemiBold',
    fontWeight: '600',
    fontSize: 20,
    color: Colors.text,
    marginBottom: 4,
  },
  description: {
    fontFamily: 'Montserrat-Regular',
    fontWeight: '400',
    fontSize: 14,
    color: Colors.text,
    marginBottom: 18,
    lineHeight: 20,
  },
  section: {
    marginBottom: 10,
  },
  amountLabel: {
    color: Colors.background,
    fontFamily: 'Montserrat-Regular',
    fontWeight: '400',
    fontSize: 14,
  },
  info: {
    fontFamily: 'Montserrat-Medium',
    fontWeight: '500',
    fontSize: 14,
    color: Colors.text,
  },
  label: {
    fontFamily: 'Montserrat-Regular',
    fontWeight: '400',
    fontSize: 11,
    color: 'grey',
  },
  primaryText: {
    fontFamily: 'Montserrat-Medium',
    fontWeight: '500',
    fontSize: 14,
    color: Colors.primary,
  },
  footer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 20,
  },
  button: {
    paddingVertical: 7,
    paddingHorizontal: 15,
    backgroundColor: 'white',
    elevation: 5,
    shadowColor: 'rgba(17, 17, 17, 0.25)',
  },
});
