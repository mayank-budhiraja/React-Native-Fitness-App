import React from 'react';
import {View, Text, StyleSheet, Image} from 'react-native';
import colors from '../constants/colors';

const Header = ({userName, mainCardHeader}) => {
  return (
    <>
      <View
        style={{
          flexDirection: 'row',
          marginHorizontal: 0,
          marginBottom: 20,
          justifyContent: 'center',
        }}>
        <Text style={styles.userText}>{userName}</Text>
      </View>
      <Text style={styles.subTitle}>{mainCardHeader}</Text>
    </>
  );
};
export default Header;

const styles = StyleSheet.create({
  subTitle: {
    fontSize: 18,
    marginLeft: 20,
    marginTop: 2,
    letterSpacing: 0.7,
    color: colors.description,
    fontFamily: 'Raleway-Bold',
  },
  userText: {
    fontSize: 24,
    fontFamily: 'Raleway-ExtraBold',
    color: colors.app_color_primary,
    letterSpacing: 0.5,
  },
});
