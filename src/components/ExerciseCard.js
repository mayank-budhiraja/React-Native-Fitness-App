import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import FastImage from 'react-native-fast-image';
import colors from '../constants/colors';

function ExerciseCard({exImage, exName, exDescription }) {
  return (
    <>
      <View style={styles.container}>
        <FastImage
          source={exImage}
          style={styles.imageContainer}
          resizeMode="contain"
        />
      </View>
      <View style={[styles.container]}>
        <Text style={styles.textContainer}>{exName}</Text>
        <Text style={styles.paraContainer}>{exDescription}</Text>
      </View>
    </>
  );
}
export default ExerciseCard;

const styles = StyleSheet.create({
  container: {
    marginTop: 40,
    marginHorizontal: 20,
  },
  imageContainer: {
    width: 375,
    height: 175,
    borderRadius: 20,
  },
  textContainer: {
    color: colors.heading,
    fontSize: 32,
    alignItems: 'center',
    justifyContent: 'center'
  },
  paraContainer: {
    color: colors.description,
    fontSize: 20,
  }
});
