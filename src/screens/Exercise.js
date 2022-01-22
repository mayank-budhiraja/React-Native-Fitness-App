import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';
import FastImage from 'react-native-fast-image';
import colors from '../constants/colors';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';

const Exercise = ({route}) => {
  const {exName, exDescription, exImage} = route.params;
  return (
    <SafeAreaView style={{flex: 1, backgroundColor: 'white'}}>
      <View style={styles.headContainer}>
        <Text style={styles.headText}>{} Exercises</Text>
      </View>
      <View style={styles.container}>
        <FastImage
          source={exImage}
          style={[styles.imageContainer, {width: wp('90%'), height: hp('50%')}]}
          resizeMode="contain"
        />
      </View>
      <View style={[styles.container]}>
        <Text style={styles.textContainer}>{exName}</Text>
        <Text style={styles.paraContainer}>{exDescription}</Text>
      </View>
    </SafeAreaView>
  );
};
//add circular timer
export default Exercise;

const styles = StyleSheet.create({
  headContainer: {
    flexDirection: 'row',
    marginHorizontal: 15,
    justifyContent: 'center',
    marginTop: 20,
  },
  headText: {
    fontSize: 20,
    fontWeight: '500',
    color: colors.app_color_primary
  },
  container: {
    marginTop: 20,
    marginHorizontal: 20,
    flexDirection: 'column',
    alignItems: 'center'
  },
  imageContainer: {

  },
  textContainer: {
    color: colors.app_color_primary,
    fontSize: 28,
    alignItems: 'center',
    justifyContent: 'center',
    fontWeight: '600'
  },
  paraContainer: {
    marginTop: 10,
    color: colors.app_color_secondary,
    fontSize: 20,
  },
});
