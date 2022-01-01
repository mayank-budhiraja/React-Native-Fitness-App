import React from 'react';
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';
import FastImage from 'react-native-fast-image';
import screenNames from '../constants/navigation';

const Card = ({image, navigation, routineName}) => {

  //navigation must have data for the routine
  return (
    <View style={styles.container}>
      <TouchableOpacity
        style={styles.cardContainer}
        onPress={() => navigation.navigate(screenNames.ROUTINE, {routineType: routineName})}>
        <FastImage source={image} style={styles.imageContainer} />
      </TouchableOpacity>
    </View>
  );
}
export default Card;

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    marginVertical: 20,
    marginHorizontal: 50,
  },
  imageContainer: {
    width: 375,
    height: 175,
    borderRadius: 20,
  },
  cardContainer: {
    borderRadius: 10,
  },
});
