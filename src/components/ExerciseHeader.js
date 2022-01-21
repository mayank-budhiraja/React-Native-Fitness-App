import React from 'react';
import {View} from 'react-native';
import {TouchableHighlight, StyleSheet, Text} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import colors from '../constants/colors';

const ExerciseHeader = ({exerciseGroup, quit, goBack}) => {
  return (
    <>
      <View style={styles.container}>
        <TouchableHighlight onPress={goBack} style={{right: 20}}>
          <Icon
            name="arrow-back-outline"
            size={40}
            color={colors.app_color_primary}
          />
        </TouchableHighlight>
        <Text style={styles.headText}>{exerciseGroup}</Text>
        <TouchableHighlight onPress={quit} style={{left: 20}}>
          <Icon name="close-circle-outline" size={40} color={colors.app_Tint} />
        </TouchableHighlight>
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-around',
    marginTop: 10,
  },
  headText: {
    fontSize: 20,
    fontWeight: '500',
    color: colors.app_color_primary,
  },
});

export default ExerciseHeader;
