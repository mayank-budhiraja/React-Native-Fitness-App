import React, {useEffect, useState} from 'react';
import {
  SafeAreaView,
  View,
  Text,
  FlatList,
  StyleSheet,
  Button,
  Alert,
} from 'react-native';

import ExerciseCard from '../components/ExerciseCard';
import BreakPause from './BreakPause';
import BeginExercise from './BeginExercise';
import screenNames from '../constants/navigation';

const RoutinePlaylist = ({navigation, route}) => {
  const {data} = route.params; // to-do state management
  const [currentIndex, setIndex] = useState(0);
  const [image, setImage] = useState(data[0].image);
  const [name, setName] = useState(data[0].routineName);
  const [description, setDescription] = useState(data[0].routineDescription);

  const [delayExercise, setDelay] = useState(false);

  useEffect(() => {}, [currentIndex, delayExercise]);

  onClickNext = () => {
    if (currentIndex < data.length) {
      setImage(data[currentIndex].image);
      setName(data[currentIndex].routineName);
      setDescription(data[currentIndex].routineDescription);
      setIndex(currentIndex + 1);
      setDelay(!delayExercise);

      if (currentIndex !== 0) {
        manageBreak();
      } else {
        setDelay(!!delayExercise);
      }
    }

    if (currentIndex === data.length) {
      navigation.navigate(screenNames.EXERCISE_COMPLETED);
    }
  };

  manageBreak = () => {
    setTimeout(() => setDelay(!!delayExercise), 2000);
  };

  quitWorkout = () => {
    Alert.alert('Hold on!', 'Are you sure you want to quit?', [
      {
        text: 'Cancel',
        onPress: () => console.log('Cancel Pressed'),
        style: 'cancel',
      },
      {
        text: 'OK',
        onPress: () =>
          navigation.reset({
            routes: [{name: screenNames.HOME}],
          }),
      },
    ]);
  };
  
  return (
    <SafeAreaView style={{flex:1, backgroundColor: 'white'}}>
      {!delayExercise && currentIndex > 0 ? (
        <Button title="Quit workout" onPress={() => quitWorkout()} />
      ) : null}
      <View>
        {delayExercise || currentIndex == 0 ? (
          <BreakPause />
        ) : (
          <ExerciseCard
            exImage={image}
            exName={name}
            exDescription={description}
          />
        )}
      </View>
      {delayExercise ? null : (
        <Button title="Next" onPress={() => onClickNext()}></Button>
      )}
    </SafeAreaView>
  );
};

export default RoutinePlaylist;
