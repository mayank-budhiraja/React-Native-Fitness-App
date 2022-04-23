import React, {useEffect} from 'react';
import {StyleSheet, StatusBar, Image} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';
import colors from '../constants/colors';
import screenNames from '../constants/navigation';
import AsyncStorage from '@react-native-async-storage/async-storage';
import en from '../utils/en.json';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';

const Splash = ({navigation}) => {
  useEffect(() => {
    setTimeout(() => checkFirstLogin(), 1000);
  }, []);

  checkFirstLogin = async () => {
    try {
      /* const firstLaunch = await AsyncStorage.getItem('firstLaunch');
      if (!firstLaunch) {
        await AsyncStorage.setItem('firstLaunch', 'false');
        navigation.navigate(screenNames.USER_CONTAINER);
      } else {
        navigation.navigate(screenNames.HOME);
      } */
      navigation.navigate(screenNames.HOME);
    } catch (e) {
      console.log('async error', e);
    }
  };
  return (
    <SafeAreaView style={styles.container}>
      <StatusBar backgroundColor={colors.app_Tint} barStyle="light-content" />
      <Image
        source={require('../assets/defaults/logo.png')}
        style={styles.image}
      />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  image: {
    width: wp('80%'),
    height: hp('40%'),
    marginBottom: 200,
  },
  container: {
    flex: 1,
    backgroundColor: colors.app_Tint,
    alignItems: 'center',
    justifyContent: 'center',
  },
  headText: {
    fontSize: 35,
    fontFamily: 'Raleway-ExtraBold',
    color: colors.solidWhite,
    letterSpacing: 0.5,
  },
});

export default Splash;
