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
import NativeButton from '../components/NativeButton';
import {TouchableHighlight} from 'react-native-gesture-handler';
import Icon from 'react-native-vector-icons/Ionicons';
import ExerciseHeader from '../components/ExerciseHeader';
import CompleteExercise from './CompleteExercise';
import { useSelector } from 'react-redux';

const RoutinePlaylist = ({navigation, route}) => {
  const {data} = route.params; // to-do state management
  const [currentIndex, setIndex] = useState(0);
  const [image, setImage] = useState(data[0].image);
  const [name, setName] = useState(data[0].routineName);
  const [description, setDescription] = useState(data[0].routineDescription);

  const [delayExercise, setDelay] = useState(false);

  const [completeEx, setComplete] = useState(false);

  const settingSelector = useSelector( state => state.settings)

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
      setComplete(true);
    }
  };

  manageBreak = () => {
    setTimeout(() => setDelay(!!delayExercise), settingSelector.breakTime * 1000);
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

  renderComponent = () => {
    return (
      <SafeAreaView style={{flex: 1, backgroundColor: 'white'}}>
        {!delayExercise && currentIndex > 0 ? (
          <ExerciseHeader
            goBack={() => navigation.goBack()}
            quit={quitWorkout}
            exerciseGroup={name}
          />
        ) : null}
        <View>
          {delayExercise || currentIndex == 0 ? (
            <BreakPause currentIndex={currentIndex} />
          ) : (
            <ExerciseCard
              exImage={image}
              exName={name}
              exDescription={description}
            />
          )}
        </View>
        {delayExercise ? null : (
          <View style={styles.buttonContainer}>
            <NativeButton
              textName="Next"
              onClick={() => onClickNext()}
              buttonWidth={'30%'}
            />
          </View>
        )}
      </SafeAreaView>
    );
  };

  return !completeEx ? (
    renderComponent()
  ) : (
    <CompleteExercise navigation={navigation} />
  );
};

const styles = StyleSheet.create({
  buttonContainer: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default RoutinePlaylist;
