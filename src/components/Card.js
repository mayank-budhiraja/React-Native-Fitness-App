import React from 'react';
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';
import FastImage from 'react-native-fast-image';
import screenNames from '../constants/navigation';

const Card = ({image, navigation, routineData, cardColor}) => {
  return (
    <TouchableOpacity
      style={[styles.cardContainer, {backgroundColor: cardColor}]}
      onPress={() =>
        navigation.navigate(screenNames.ROUTINE, {routineType: routineData.routine_name})
      }>
      <View style={styles.container}>
        <Text style={[styles.textContainer, {fontWeight: '700'}]}> {routineData.routine_name} </Text>
        <Text style={[styles.textContainer, {fontWeight: '400'}]}> {routineData.routine_level} Level </Text>
        <Text style={[styles.textContainer, {fontWeight: '200'}]}> {routineData.routine_time} mins</Text>
      </View>
      <View style={styles.container}>
        <FastImage style={styles.imageContainer}/>
      </View>
    </TouchableOpacity>
  );
};
export default Card;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
  },

  cardContainer: {
    marginTop: 20,
    marginHorizontal: 25, 
    borderRadius: 40,
    flexDirection: 'row',
    height: 170, 
  },
  textContainer: {
    top: 30,
    left: 30,
    marginTop: 10,
  },
  imageContainer: {
    top: 30,
    right: 20,  
    borderWidth: 2,
    borderColor: 'white',
    minHeight: 100, 
    maxHeight: 200
  }
});
