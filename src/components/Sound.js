import React from 'react';
import {View, Text, StyleSheet, Switch} from 'react-native';
import {Colors} from 'react-native/Libraries/NewAppScreen';
import colors from '../constants/colors';

const Sound = ({soundInfo, toggleSound}) => {
  return (
    <View style={styles.itemContainer}>
      <Text style={styles.textContainer}>Sound On/Off</Text>
      <View style={styles.radioContainer}>
        <Switch
          onValueChange={() => toggleSound(!soundInfo)}
          thumbColor={colors.app_color_secondary}
          value={soundInfo}
          trackColor={{true: colors.subcategory_button}}
        />
      </View>
    </View>
  );
};
export default Sound;

const styles = StyleSheet.create({
  radioContainer: {
    marginLeft: 10,
    marginTop: 3
  },
  textContainer: {
    top: 5,
    fontSize: 18,
    color: colors.app_color_primary,
  },
  itemContainer: {
    top: 40,
    marginHorizontal: 24,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  switcthContainer: {
    color: colors.subcategory_button,
  },
});
