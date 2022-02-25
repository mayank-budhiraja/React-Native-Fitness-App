import React from 'react';
import {View, Text, StyleSheet, Image} from 'react-native';
import colors from '../constants/colors';

const Header = () => {
  return (
    <>
      <View
        style={{
          flexDirection: 'row',
          marginHorizontal: 1,
          justifyContent: 'center',
        }}>
        <Text style={styles.userText}>My Fit App</Text>
      </View>
      <Text style={styles.subTitle}>Personal Fitness Plan</Text>
    </>
  );
};
export default Header;

const styles = StyleSheet.create({
  subTitle: {
    fontSize: 15,
    fontWeight: '700',
    marginLeft: 20,
    marginTop: 20,
    letterSpacing: 2
  },
  userText: {
    fontSize: 24,
    fontWeight: '700',
    color: colors.app_color_primary,
    letterSpacing: 2
  },
});
