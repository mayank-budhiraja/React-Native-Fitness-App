import React from 'react';
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';
import FastImage from 'react-native-fast-image';
import screenNames from '../constants/navigation';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import colors from '../constants/colors';

const Card = ({image, navigation, routineData, cardColor}) => {
  return (
    <View style={{alignItems: 'center'}}>
      <TouchableOpacity
        style={[styles.cardContainer, {backgroundColor: 'white'}]}
        onPress={() =>
          navigation.navigate(screenNames.ROUTINE, {
            routineType: routineData.routine_name,
          })
        }>
        <View style={styles.container}>
          <FastImage
            source={image}
            style={[
              styles.imageContainer,
              {width: wp('35%'), height: hp('15%')},
            ]}
          />
        </View>
        <View style={styles.mainContainer}>
          <Text style={[styles.textContainer, {fontWeight: '700'}]}>
            {routineData.routine_name}
          </Text>
        </View>
      </TouchableOpacity>
    </View>
  );
};
export default Card;

const styles = StyleSheet.create({
  buttonContainer: {
    flexDirection: 'row',
    paddingVertical: 8,
    borderRadius: 20,
    borderRadius: 20,
    backgroundColor: colors.cardButton,
    marginTop: hp('7%'),
    maxWidth: wp('30%'),
  },
  mainContainer: {
    flex: 1,
    flexDirection: 'column',
  },
  container: {
    flex: 1,
    flexDirection: 'row',
  },
  mainContainer: {
    marginTop: 140,
    right: 40,
    flexDirection: 'column',
    justifyContent: 'center',
  },
  cardContainer: {
    marginBottom: 20,
    marginLeft: 20,
    borderRadius: 10,
    flexDirection: 'row',
    height: hp('28%'),
    width: wp('43%'),
    alignContent: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.22,
    shadowRadius: 2.22,
    elevation: 3,
  },
  textContainer: {
    marginTop: 10,
    color: colors.app_color_primary,
    alignSelf: 'center',
  },
  imageContainer: {
    bottom: 10,
    marginTop: hp('5%'),
    marginHorizontal: 15,
    backgroundColor: colors.cardBG,
    borderRadius: 20,
  },
});
