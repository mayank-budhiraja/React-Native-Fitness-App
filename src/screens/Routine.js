import React from 'react';
import {SafeAreaView, Text, FlatList, StyleSheet} from 'react-native';
import routines from '../assets/Routine/routines';
import RoutineCard from '../components/RoutineCard';

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

  return (
    <SafeAreaView>
      <FlatList
        data={routines}
        renderItem={this.renderItem}
        keyExtractor={(item, index) => index.toString()}
        style={styles.flatListContainer}
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  flatListContainer: {
    marginHorizontal: 15
  },
});

export default Routine;
