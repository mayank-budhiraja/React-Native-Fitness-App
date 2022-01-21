import React, { useEffect } from 'react';
import {View, StyleSheet, Text} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';
import colors from '../constants/colors';
import screenNames from '../constants/navigation';

const Splash = ({navigation}) => {
    useEffect(() => {
        setTimeout(() => navigation.navigate(screenNames.HOME), 1000)
    }, [])
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
    justifyContent: 'center'
  },
  headText: {
    fontWeight: '700',
    fontSize: 30,
    color: colors.solidWhite,
    bottom: 100
  },
});

export default Splash;
