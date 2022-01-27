import React from 'react';
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';
import FastImage from 'react-native-fast-image';
import screenNames from '../constants/navigation';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';

const Card = ({image, navigation, routineData, cardColor}) => {
  return (
    <View style={{alignItems: 'center'}}>
      <TouchableOpacity
        style={[styles.cardContainer, {backgroundColor: cardColor}]}
        onPress={() =>
          navigation.navigate(screenNames.ROUTINE, {
            routineType: routineData.routine_name,
          })
        }>
        <View style={styles.container}>
          <Text style={[styles.textContainer, {fontWeight: '700'}]}>
            {' '}
            {routineData.routine_name}{' '}
          </Text>
          <Text style={[styles.textContainer, {fontWeight: '400'}]}>
            {' '}
            {routineData.routine_level} Level{' '}
          </Text>
          <Text style={[styles.textContainer, {fontWeight: '200'}]}>
            {' '}
            {routineData.routine_time} mins
          </Text>
        </View>
        <View style={styles.container}>
          <FastImage
            source={image}
            style={[
              styles.imageContainer,
              {width: wp('50%'), height: hp('20%')},
            ]}
          />
        </View>
      </TouchableOpacity>
    </View>
  );
};
export default Card;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
  },

  cardContainer: {
    marginBottom: 20,
    borderRadius: 40,
    flexDirection: 'row',
    height: hp('20%'),
    width: wp('90%'),
    alignContent: 'center',
  },
  textContainer: {
    top: 30,
    left: 30,
    marginTop: 10,
  },
  imageContainer: {
    right: 40,
    maxHeight: hp('20%'),
    bottom: 10,
  },
});
