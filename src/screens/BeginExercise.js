import React from 'react';
import {View, Text, StyleSheet, Button} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';
import FastImage from 'react-native-fast-image';
import screenNames from '../constants/navigation';
import colors from '../constants/colors';
import Icon from 'react-native-vector-icons/Ionicons';

const BeginExercise = ({navigation, route}) => {
  return (
    <SafeAreaView>
      <View style={styles.container}>
        <Icon name="checkmark-circle-sharp" size={24} />
      </View>
      <View style={[styles.container]}>
        <Text style={styles.textContainer}>Begin!</Text>
        <Text style={styles.paraContainer}>Exercise</Text>
      </View>
    </SafeAreaView>
  );
};

export default BeginExercise;

const styles = StyleSheet.create({
  container: {
    marginTop: 40,
    marginHorizontal: 20,
  },
  imageContainer: {
    width: 375,
    height: 175,
    borderRadius: 20,
  },
  textContainer: {
    color: colors.heading,
    fontSize: 32,
    alignItems: 'center',
    justifyContent: 'center',
  },
  paraContainer: {
    color: colors.description,
    fontSize: 20,
  },
});
