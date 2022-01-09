import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import RadioGroup from 'react-native-radio-buttons-group';

const PauseTime = ({onClick, buttonsData}) => {
  return (
    <View style={styles.itemContainer}>
      <Text style={styles.textContainer}>Pause Time</Text>
      <View style={styles.radioContainer}>
        <RadioGroup
          radioButtons={buttonsData}
          onPress={() => onClick}
          layout="row"
          size="18"
        />
      </View>
    </View>
  );
};
export default PauseTime;

const styles = StyleSheet.create({
  radioContainer: {
    marginLeft: 50,
  },
  textContainer: {
    top: 5,
    fontSize: 18,
  },
  itemContainer: {
    top: 20,
    marginLeft: 10,
    flexDirection: 'row',
  },
});
