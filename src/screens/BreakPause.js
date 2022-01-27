import React, {useEffect} from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';
import FastImage from 'react-native-fast-image';
import screenNames from '../constants/navigation';
import colors from '../constants/colors';
import Icon from 'react-native-vector-icons/Ionicons';
import {CountdownCircleTimer} from 'react-native-countdown-circle-timer';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';

import Begin from '../assets/images/Home/chest.png';
import { useSelector } from 'react-redux';

const BreakPause = ({currentIndex}) => {
  const [isPlaying, setIsPlaying] = React.useState(true);

  const selector = useSelector( state => state.settings)

  return (
    <SafeAreaView>
      {currentIndex === 0 ? (
        <View style={styles.container}>
          <View style={styles.imageContainer}>
            <FastImage
              style={{width: wp('80%'), height: hp('40%')}}
            />
          </View>
          <View style={styles.info}>
            <Text style={styles.textContainer}>Let's Begin</Text>
            <Text style={styles.paraContainer}>
              Press next to begin the routine
            </Text>
          </View>
        </View>
      ) : (
        <View style={{top: 60}}>
          <View style={styles.container}>
            <CountdownCircleTimer
              isPlaying={isPlaying}
              duration={selector.breakTime}
              colors={colors.app_Tint}
              colorsTime={[10, 6, 3, 0]}
              strokeWidth={15}
              size={300}
              onComplete={() => ({shouldRepeat: true, delay: 2})}>
              {({remainingTime, color}) => (
                <Text style={{color, fontSize: 80}}>{remainingTime}</Text>
              )}
            </CountdownCircleTimer>
          </View>
          <View style={{flexDirection: 'column', alignItems: 'center', top: 60}}>
            <Text style={styles.textContainer}>Take a Break</Text>
          </View>
        </View>
      )}
    </SafeAreaView>
  );
};

export default BreakPause;

const styles = StyleSheet.create({
  info: {
    flexDirection: 'column',
    alignItems: 'center',
    marginTop: 40,
  },
  container: {
    margin: 20,
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
  },
  imageContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 20,
  },
  textContainer: {
    color: colors.heading,
    fontSize: 32,
    alignItems: 'center',
    justifyContent: 'center',
  },
  paraContainer: {
    top: 20,
    color: colors.description,
    fontSize: 20,
  },
});
