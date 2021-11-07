import React from 'react';
import {SafeAreaView, Button, Text, FlatList, StyleSheet} from 'react-native';
import routines from '../assets/Routine/routines';
import RoutineCard from '../components/RoutineCard';
import screenNames from '../constants/navigation';

function Routine({navigation, route}) {
  const {routineType} = route.params;
  //based on routineType. information should be extracted - done
  //create card component for Routine screen

  //create data for all routineType

  renderItem = ({item}) => {
    return item[routineType].map((x, index) => {
      return (
        <RoutineCard
          key={index}
          image={x.image}
          navigation={navigation}
          exerciseName={x.routineName}
          exerciseDescription={x.routineDescription}
        />
      );
    });
  };

  const startRoutine = () => {
    const selectedRoutine = routines[0][routineType]
    navigation.navigate(screenNames.ROUTINEPLAYLIST, {data: selectedRoutine})
    
    // from here we will send the array to start the function
      // push a screen
      // start the exercise 
      // Next button - to go to next exercise
  };

  return (
    <SafeAreaView>
      <Button title="Start Routine" onPress={() => startRoutine()} />
      <FlatList
        data={routines}
        renderItem={renderItem}
        keyExtractor={(item, index) => index.toString()}
        style={styles.flatListContainer}
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  flatListContainer: {
    marginHorizontal: 15,
  },
});

export default Routine;
