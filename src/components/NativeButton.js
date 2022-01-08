import React from 'react';
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';
import { TouchableHighlight } from 'react-native-gesture-handler';
import colors from '../constants/colors';

const NativeButton = ({textName, onClick}) => {
  //navigation must have data for the routine
  return (
    <TouchableHighlight style={styles.cardContainer} onPress={onClick}>
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
    borderRadius: 10,
    borderWidth: 2,
    borderRadius: 20,
    borderColor: colors.primary_button,
    backgroundColor: colors.primary_button,
  },
});
