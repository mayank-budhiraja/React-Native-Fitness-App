import React from 'react';
import {View, Text, StyleSheet, Switch} from 'react-native';
import { Colors } from 'react-native/Libraries/NewAppScreen';
import colors from '../constants/colors';

const Sound = ({soundInfo, toggleSound}) => {
  return (
    <View style={styles.itemContainer}>
      <Text style={styles.textContainer}>Sound On/Off</Text>
      <View style={styles.radioContainer}>
        <Switch onValueChange={() => toggleSound(!soundInfo)} value={soundInfo} trackColor={{true: colors.subcategory_button, false: 'grey'}} />
      </View>
    </View>
  );
};
export default Sound;

const styles = StyleSheet.create({
  radioContainer: {
    marginLeft: 40,
  },
  textContainer: {
    top: 5,
    fontSize: 18,
    color: colors.app_color_primary
  },
  itemContainer: {
    top: 40,
    marginLeft: 10,
    flexDirection: 'row',
    justifyContent: 'flex-start'
  },
  switcthContainer: {
    color: colors.subcategory_button
  }
});
