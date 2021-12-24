import React, {useEffect, useState} from 'react';
import {SafeAreaView, View, Text, FlatList, StyleSheet} from 'react-native';

import ExerciseCard from '../components/ExerciseCard';
import BreakPause from './BreakPause';

const RoutinePlaylist = ({navigation, route}) => {
  const {data} = route.params; // to-do state management
  const [currentIndex, setIndex] = useState(1);
  const [image, setImage] = useState(data[0].image);
  const [name, setName] = useState(data[0].routineName);
  const [description, setDescription] = useState(data[0].routineDescription);
  const [delayExercise, setDelay] = useState(false);

  useEffect(() => {
    const interval = setTimeout(manageRoutines, 2000);
    return () => {
      clearInterval(interval);
    };
  }, [currentIndex]);

  // write a function to toggle break after every exercise 

  console.log(delayExercise);
  manageRoutines = () => {
    if (currentIndex <= data.length) {
      setTimeout(manageBreak, 1000);
    }
    if (currentIndex < data.length) {
      setImage(data[currentIndex].image);
      setName(data[currentIndex].routineName);
      setDescription(data[currentIndex].routineDescription);
      setIndex((currentIndex) => currentIndex + 1);
    }
  }; // to-do improve this functions

  manageBreak = () => {
    setDelay(!delayExercise);
  };

  return (
    <SafeAreaView>
      <View>
        <ExerciseCard
          exImage={image}
          exName={name}
          exDescription={description}
        />
      </View>
    </SafeAreaView>
  );
};

export default RoutinePlaylist;
