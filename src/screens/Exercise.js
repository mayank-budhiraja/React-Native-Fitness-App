import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';
import FastImage from 'react-native-fast-image';
import colors from '../constants/colors';
import ExerciseCard from '../components/ExerciseCard';

const Exercise = ({route}) => {
  const {exName, exDescription, exImage, exReps} = route.params;
  return (
    <SafeAreaView style={{flex: 1, backgroundColor: 'white'}}>
      <ExerciseCard
        exImage={exImage}
        exName={exName}
        exDescription={exDescription}
        exReps={exReps}
      />
    </SafeAreaView>
  );
};

//add circular timer
export default Exercise;

const styles = StyleSheet.create({
  headContainer: {
    flexDirection: 'row',
    marginHorizontal: 15,
    justifyContent: 'center',
    marginTop: 20,
  },
  headText: {
    fontSize: 20,
    fontFamily: 'Raleway-Bold',
    letterSpacing: 0.7,
    color: colors.app_color_primary,
  },
  container: {
    marginTop: 20,
    marginHorizontal: 20,
    flexDirection: 'column',
    alignItems: 'center',
  },
  imageContainer: {},
  textContainer: {
    color: colors.app_color_primary,
    fontSize: 28,
    alignItems: 'center',
    justifyContent: 'center',
    fontWeight: '600',
  },
  paraContainer: {
    marginTop: 10,
    color: colors.app_color_secondary,
    fontSize: 20,
  },
});
