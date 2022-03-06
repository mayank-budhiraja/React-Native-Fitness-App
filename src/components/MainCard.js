import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import FastImage from 'react-native-fast-image';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import colors from '../constants/colors';
import LottieView from 'lottie-react-native';
import {TouchableOpacity} from 'react-native-gesture-handler';
import routines from '../assets/data/routines';
import screenNames from '../constants/navigation';

const MainCard = ({
  routineType,
  image,
  headerText,
  subHeaderText,
  timeText,
  navigation,
}) => {
  return (
    <TouchableOpacity
      onPress={() => {
        navigation.navigate(screenNames.ROUTINE, {
          routineType: routineType,
        });
      }}>
      <View style={styles.cardContainer}>
        <View style={styles.leftContainer}>
          <Text style={styles.textContainer}>{headerText}</Text>
          <View style={styles.levelContainer}>
            <Text
              style={{
                fontFamily: 'Raleway-Bold',
                letterSpacing: 0.7,
                fontSize: 14,
                color: colors.app_color_secondary,
                marginLeft: 1,
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
    </TouchableOpacity>
  );
};

export default MainCard;

const styles = StyleSheet.create({
  planContainer: {
    fontSize: 14,
    fontWeight: '700',
    flexDirection: 'row',
  },
  linearGradient: {
    borderRadius: 20,
    paddingHorizontal: 12,
    paddingVertical: 5,
  },
  timeContainer: {
    marginTop: 90,
    fontSize: 20,
    fontFamily: 'Raleway-Bold',
    letterSpacing: 0.7,
    color: colors.app_color_primary,
  },
  levelContainer: {
    flexDirection: 'row',
    marginTop: 5,
  },
  leftContainer: {
    flexDirection: 'column',
    top: 20,
    marginRight: 60,
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
    right: -15,
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
    width: wp('30%'),
  },
  mainContainer: {
    justifyContent: 'center',
  },
  textContainer: {
    fontSize: 24,
    color: colors.app_color_primary,
    fontFamily: 'Raleway-ExtraBold',
    width: wp('35%'),
  },
});
