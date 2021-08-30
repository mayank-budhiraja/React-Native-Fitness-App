import React from 'react';
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';
import FastImage from 'react-native-fast-image';
import screenNames from '../constants/navigation';

export default function Card({image, navigation}) {

  //navigation must have data for the routine
  return (
    <View style={styles.container}>
      <TouchableOpacity
        style={styles.cardContainer}
        onPress={() => navigation.navigate(screenNames.ROUTINE)}>
        <FastImage source={image} style={styles.imageContainer} />
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
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
