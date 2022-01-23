import React, {useEffect} from 'react';
import {View, Text, StyleSheet, Button} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';
import FastImage from 'react-native-fast-image';
import screenNames from '../constants/navigation';
import colors from '../constants/colors';
import Icon from 'react-native-vector-icons/Ionicons';
import NativeButton from '../components/NativeButton';

const CompleteExercise = ({navigation, route}) => {
  const backHome = () => {
    navigation.reset({
      routes: [{name: screenNames.HOME}],
    });
  };

  return (
    <SafeAreaView style={{flex: 1, backgroundColor: 'white'}}>
      <View style={styles.container}>
        <Text style={styles.textContainer}>Exercises Completed!</Text>
        <View style={{marginTop: 50}}>
          <Icon
            name="checkmark-circle-sharp"
            size={100}
            color={colors.subcategory_button}
          />
        </View>
        <View style={styles.buttonContainer}>
          <NativeButton
            textName="Go to Home"
            onClick={backHome}
            buttonWidth={'60%'}
            bgColor={colors.app_color_secondary}
          />
        </View>
      </View>
    </SafeAreaView>
  );
};

export default CompleteExercise;

const styles = StyleSheet.create({
  buttonContainer: {
    marginTop: 250,
  },
  container: {
    marginTop: 40,
    marginHorizontal: 20,
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'column',
    flex: 1,
    bottom: 0,
  },
  imageContainer: {
    width: 375,
    height: 175,
    borderRadius: 20,
  },
  textContainer: {
    color: colors.app_color_primary,
    fontSize: 32,
    fontWeight: '700',
    alignItems: 'center',
    justifyContent: 'center',
  },
  paraContainer: {
    color: colors.description,
    fontSize: 20,
  },
});
