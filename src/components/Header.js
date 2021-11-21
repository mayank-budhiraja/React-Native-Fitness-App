import React from 'react';
import {View, Text, StyleSheet, Image} from 'react-native';
import FastImage from 'react-native-fast-image';
import screenNames from '../constants/navigation';

const Header = ({userName, userImage}) => {
  //navigation must have data for the routine
  return (
    <View style={styles.container}>
      <View>
        <Text>Welcome {userName}</Text>
        <Text>Don't miss the fitness</Text>
      </View>
      <View>
        <Image source={userImage} style={styles.imageContainer} />
      </View>
    </View>
  );
};
export default Header;

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginHorizontal: 20,
    marginTop: 10,
  },
  imageContainer: {
    height: 50,
    width: 50,
    borderWidth: 2,
  },
  cardContainer: {
    borderRadius: 10,
  },
});
