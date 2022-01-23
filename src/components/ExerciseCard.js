import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import FastImage from 'react-native-fast-image';
import colors from '../constants/colors';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';

const ExerciseCard = ({exImage, exName, exDescription, exReps}) => {
  return (
    <>
      <View style={styles.container}>
        <FastImage
          source={exImage}
          style={[styles.imageContainer, {width: wp('90%'), height: hp('50%')}]}
          resizeMode="contain"
        />
      </View>
      <View style={[styles.container, {marginHorizontal: 40, top: -40}]}>
        <Text style={styles.textContainer}>{exName}</Text>
        <Text style={styles.repsContainer}>{exReps}</Text>
        <Text style={styles.paraContainer}>{exDescription}</Text>
      </View>
    </>
  );
};
export default ExerciseCard;

const styles = StyleSheet.create({
  headContainer: {
    flexDirection: 'row',
    marginHorizontal: 15,
    justifyContent: 'center',
    marginTop: 20,
  },
  headText: {
    fontSize: 20,
    fontWeight: '500',
    color: colors.app_color_primary,
  },
  container: {
    marginHorizontal: 20,
    alignItems: 'center'
  },
  imageContainer: {
    borderRadius: 20,
  },
  textContainer: {
    color: colors.heading,
    fontSize: 32,
    alignItems: 'center',
    justifyContent: 'center',
    fontWeight: '700'
  },
  paraContainer: {
    color: colors.description,
    fontSize: 20,
    marginTop: 10,
  },
  repsContainer: {
    color: colors.description,
    fontSize: 20,
    marginTop: 10,
    fontWeight: '500'
  },
});
