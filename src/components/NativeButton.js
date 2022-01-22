import React from 'react';
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';
import {TouchableHighlight} from 'react-native-gesture-handler';
import colors from '../constants/colors';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';

const NativeButton = ({textName, onClick, buttonWidth}) => {
  return (
    <TouchableHighlight
      style={[styles.cardContainer, {width: wp(buttonWidth)}]}
      onPress={onClick}
      underlayColor={colors.app_color_primary}>
      <Text style={styles.text}> {textName} </Text>
    </TouchableHighlight>
  );
};
export default NativeButton;

const styles = StyleSheet.create({
  text: {
    fontSize: 20,
    color: 'white',
  },
  cardContainer: {
    flexDirection: 'row',
    padding: 10,
    borderRadius: 20,
    borderWidth: 2,
    borderRadius: 20,
    borderColor: colors.app_Tint,
    backgroundColor: colors.app_Tint,
    justifyContent: 'center',
    marginBottom: 10,
  },
});
