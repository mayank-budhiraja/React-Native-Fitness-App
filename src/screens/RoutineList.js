import React from 'react';
import {
  SafeAreaView,
  Button,
  Text,
  FlatList,
  StyleSheet,
  View,
} from 'react-native';
import routines from '../assets/Routine/routines';
import RoutineCard from '../components/RoutineCard';
import colors from '../constants/colors';
import screenNames from '../constants/navigation';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import NativeButton from '../components/NativeButton';

const Routine = ({navigation, route}) => {
  const {routineType} = route.params;
  //based on routineType. information should be extracted - done
  //create card component for Routine screen - done

  //create data for all routineType - done

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
    const selectedRoutine = routines[0][routineType];
    navigation.navigate(screenNames.ROUTINEPLAYLIST, {data: selectedRoutine});

    // from here we will send the array to start the function
    // push a screen
    // start the exercise
    // Next button - to go to next exercise
  };

  return (
    <SafeAreaView style={styles.mainContainer}>
      <View style={styles.container}>
        <View>
          <Text style={styles.header}>Routine Name</Text>
        </View>
        <FlatList
          data={routines}
          renderItem={renderItem}
          keyExtractor={(item, index) => index.toString()}
          style={styles.flatListContainer}
        />
        <View style={styles.buttonContainer}>
          <NativeButton
            textName="Start Routine"
            onClick={() => startRoutine()}
            buttonWidth={'60%'}
          />
        </View>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginBottom: 100,
  },
  header: {
    fontSize: 30,
    fontWeight: '700',
    color: colors.app_color_primary,
    top: 40,
    left: 30,
  },
  container: {
    backgroundColor: colors.solidWhite,
    height: hp('65%'),
    width: wp('100%'),
    borderTopRightRadius: 80,
    borderTopLeftRadius: 80,
    marginTop: 300,
  },
  mainContainer: {
    backgroundColor: colors.app_Tint,
    flexDirection: 'column',
    alignItems: 'flex-end',
  },
  flatListContainer: {
    marginHorizontal: 15,
    marginTop: 60,
  },
});

export default Routine;
