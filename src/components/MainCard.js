import React from 'react';
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';
import FastImage from 'react-native-fast-image';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import colors from '../constants/colors';

const MainCard = ({image, headerText, subHeaderText, timeText}) => {
  return (
    <View style={styles.cardContainer}>
      <View style={styles.leftContainer}>
        <Text style={styles.textContainer}>{headerText}</Text>
        <View style={styles.levelContainer}>
          <Text
            style={{
              fontWeight: '700',
              fontSize: 14,
              color: colors.app_color_secondary,
            }}>
            {subHeaderText}
          </Text>
        </View>
        <Text style={styles.timeContainer}>{timeText}</Text>
      </View>
      <View style={styles.rightColumn}>
        <View style={styles.mainContainer}>
          <FastImage source={image} style={styles.imageContainer} />
        </View>
        <View style={styles.buttonContainer}>
          <TouchableOpacity style={styles.button}>
            <Text style={styles.startContainer}>START</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

export default MainCard;

const styles = StyleSheet.create({
  timeContainer: {
    marginTop: 110,
    fontSize: 20,
    fontWeight: '300',
  },
  levelContainer: {
    flexDirection: 'row',
    marginTop: 5,
  },
  leftContainer: {
    flexDirection: 'column',
    top: 50,
    marginHorizontal: 20,
  },
  startContainer: {
    color: colors.solidWhite,
    fontSize: 15,
    fontWeight: '700',
    letterSpacing: 2,
  },
  rightColumn: {
    flexDirection: 'column',
    justifyContent: 'space-evenly',
  },
  button: {
    borderRadius: 30,
    height: 40,
    width: 120,
    borderColor: colors.app_Tint,
    backgroundColor: colors.app_Tint,
    justifyContent: 'center',
    flexDirection: 'row',
    alignItems: 'center',
  },
  buttonContainer: {
    justifyContent: 'flex-end',
    bottom: 20,
    left: 10,
  },
  cardContainer: {
    flexDirection: 'row',
    marginHorizontal: 20,
    marginTop: 15,
    borderRadius: 30,
    backgroundColor: '#cce8ff',
    justifyContent: 'center',
    height: hp('35%'),
  },
  imageContainer: {
    bottom: 20,
    height: hp('30%'),
    width: wp('35%'),
  },
  mainContainer: {
    justifyContent: 'center',
  },
  textContainer: {
    fontSize: 20,
    color: colors.app_color_primary,
    fontWeight: '700',
  },
});
