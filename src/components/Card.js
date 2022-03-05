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
    <TouchableOpacity
      style={[styles.cardContainer, {backgroundColor: colors.cardBG}]}
      onPress={() =>
        navigation.navigate(screenNames.ROUTINE, {
          routineType: routineData.routine_name,
        })
      }>
      <View style={styles.container}>
        <FastImage
          source={image}
          style={[styles.imageContainer, {width: wp('55%'), height: hp('25%')}]}
        />
      </View>
      <View style={styles.mainContainer}>
        <Text style={[styles.textContainer, {fontWeight: '700'}]}>
          {routineData.routine_name}
        </Text>
      </View>
    </TouchableOpacity>
  );
};
export default Card;

const styles = StyleSheet.create({
  container: {
    flexDirection: 'column',
  },
  mainContainer: { 
    flexDirection: 'row',
    justifyContent: 'center',
    backgroundColor: 'rgba(252, 252, 252, 0.8)',
    overflow: 'hidden',
  },
  cardContainer: {
    borderWidth: 2,
    marginLeft: 20,
    marginRight: 10,
    borderRadius: 20,
    flexDirection: 'column',
    borderColor: colors.cardBG,
    marginBottom: 40,
    /* 
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.22,
    shadowRadius: 2.22,
    elevation: 3, 
    */
  },
  textContainer: {
    paddingTop: 5,
    marginBottom: 5, 
    flexDirection: 'row',
    alignSelf: 'center',
    color: colors.app_color_primary,
    letterSpacing: 2
  },
  imageContainer: {},
});
