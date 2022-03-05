import React from 'react';
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';
import FastImage from 'react-native-fast-image';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import colors from '../constants/colors';
import LottieView from 'lottie-react-native';

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
          <LottieView
            source={require('../assets/animations/lottieStart.json')}
            autoPlay
            loop
          />
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
  buttonContainer: {
    height: hp('10%'),
    width: wp('50%'),
    position: 'absolute',
    bottom: 1,
    right: -20
  },
  cardContainer: {
    flexDirection: 'row',
    marginHorizontal: 20,
    marginTop: 15,
    borderRadius: 30,
    backgroundColor: 'rgba(204, 232, 255, 0.7)',
    justifyContent: 'center',
    height: hp('35%'),
  },
  imageContainer: {
    bottom: 40,
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
