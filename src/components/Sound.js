import React from 'react';
import {View, Text, StyleSheet, Switch} from 'react-native';

const Sound = ({soundInfo, toggleSound}) => {
  return (
    <View style={styles.itemContainer}>
      <Text style={styles.textContainer}>Sound On/Off</Text>
      <View style={styles.radioContainer}>
        <Switch onValueChange={() => toggleSound(!soundInfo)} value={soundInfo} />
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
  },
  itemContainer: {
    top: 40,
    marginLeft: 10,
    flexDirection: 'row',
    justifyContent: 'flex-start'
  },
});
