import React from 'react';
import {
  SafeAreaView,
  Button,
  Text,
  FlatList,
  StyleSheet,
  View,
  Platform,
} from 'react-native';
import routines from '../assets/data/routines';
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
  };

  return (
    <SafeAreaView style={styles.mainContainer}>
      <View style={styles.container}>
        <View>
          <Text style={styles.header}>{routineType}</Text>
        </View>
        <FlatList
          data={routines}
          renderItem={renderItem}
          keyExtractor={(item, index) => index.toString()}
          style={styles.flatListContainer}
        />
        <View style={styles.buttonContainer}>
          <NativeButton
            textName="START"
            onClick={() => startRoutine()}
            buttonWidth={'65%'}
          />
        </View>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  header: {
    fontSize: 30,
    fontFamily: 'Raleway-Bold',
    letterSpacing: 0.7,
    color: colors.app_color_primary,
    top: 40,
    left: 30,
  },
  container: {
    backgroundColor: colors.solidWhite,
    height: hp('80%'),
    width: wp('100%'),
    borderTopRightRadius: 80,
    borderTopLeftRadius: 80,
    marginTop: hp('20%'),
  },
  mainContainer: {
    backgroundColor: 'rgba(245, 126, 122, 0.95)',
    flexDirection: 'column',
    alignItems: 'flex-end',
  },
  flatListContainer: {
    marginHorizontal: 15,
    marginTop: 60,
    marginBottom: 10
  },

  buttonContainer: {
    position: 'absolute',
    //backgroundColor: 'rgba(240, 240, 240, 0.5)',
    borderColor: colors.borderColor,
    flex: 1,
    paddingBottom: 30,
    width: '100%',
    marginTop: hp('69%'),
    justifyContent: 'center',
    flexDirection: 'row',
  },
});

export default Routine;
