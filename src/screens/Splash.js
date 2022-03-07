import React, {useEffect} from 'react';
import {View, StyleSheet, Text} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';
import colors from '../constants/colors';
import screenNames from '../constants/navigation';
import AsyncStorage from '@react-native-async-storage/async-storage';

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
      <Text style={styles.headText}>Fit App</Text>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.app_Tint,
    alignItems: 'center',
    justifyContent: 'center',
  },
  headText: {
    fontWeight: '700',
    fontSize: 30,
    color: colors.solidWhite,
    bottom: 100,
  },
});

export default Splash;
