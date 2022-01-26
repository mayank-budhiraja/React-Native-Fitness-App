import React from 'react';
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';
import FastImage from 'react-native-fast-image';
import colors from '../constants/colors';
import screenNames from '../constants/navigation';

const RoutineCard = ({
  image,
  navigation,
  exerciseName,
  exerciseDescription,
  exerciseRep
}) => {
  //navigation must have data for the routine

  return (
    <View style={{marginHorizontal: 15}}>
      <TouchableOpacity
        style={styles.cardContainer}
        onPress={() =>
          navigation.navigate(screenNames.EXERCISE, {
            exName: exerciseName,
            exDescription: exerciseDescription,
            exImage: image,
            exReps: exerciseRep
          })
        }>
        <FastImage
          source={image}
          style={styles.imageContainer}
          resizeMode="contain"
        />
        <View style={styles.textContainer}>
          <Text style={styles.headContainer}>{exerciseName}</Text>
          <Text
            style={styles.paraContainer}
            numberOfLines={3}
            ellipsizeMode="tail">
            {exerciseDescription}
          </Text>
        </View>
      </TouchableOpacity>
    </View>
  );
};
export default RoutineCard;

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 5,
  },
  imageContainer: {
    width: 100,
    height: 100,
    borderRadius: 20,
  },
  cardContainer: {
    borderRadius: 10,
    flexDirection: 'row',
  },
  headContainer: {
    fontWeight: '700',
    fontSize: 20,
    color: colors.app_color_primary,
    marginTop: 20,
    marginLeft: 20,
  },
  paraContainer: {
    fontWeight: '400',
    color: colors.app_color_secondary,
    fontSize: 16, 
    marginTop: 5,
    paddingLeft: 20,
  },
  textContainer: {
    flex: 1,
    flexDirection: 'column',
  },
});
