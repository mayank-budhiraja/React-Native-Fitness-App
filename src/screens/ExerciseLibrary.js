import React, {useEffect, useState} from 'react';
import {SafeAreaView} from 'react-native-safe-area-context';
import {View, Text, StyleSheet, FlatList} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import library from '../store/actions/library';
import routines from '../assets/data/routines';
import RoutineCard from '../components/RoutineCard';
import colors from '../constants/colors';

const ExerciseLibrary = ({navigation}) => {
  const dispatch = useDispatch();
  const state = useSelector((state) => state.library);

  useEffect(() => {
    dispatch(library.routineLibrary(routines));
  }, []);

  const renderItem = ({item, index}) => {
    return (
      <RoutineCard
        key={index}
        image={item.image}
        navigation={navigation}
        exerciseName={item.routineName}
        exerciseDescription={item.routineDescription}
      />
    );
  };

  return (
    <SafeAreaView style={{flex: 1, backgroundColor: colors.homeBG}}>
      <View style={styles.headerContainer}>
        <Text style={styles.header}>Exercise Library</Text>
      </View>
      <FlatList
        data={state.routineLibrary}
        renderItem={renderItem}
        keyExtractor={(item, index) => index.toString()}
        style={styles.flatListContainer}
      />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  flatListContainer: {
    marginHorizontal: 15,
    marginTop: 10,
    marginBottom: 10,
  },
  headerContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
  },
  header: {
    fontSize: 24,
    color: colors.app_color_primary,
    fontFamily: 'Raleway-ExtraBold',
    letterSpacing: 0.7,
    marginVertical: 15
  },
});
export default ExerciseLibrary;
