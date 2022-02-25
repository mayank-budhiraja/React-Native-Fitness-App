import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {TouchableHighlight} from 'react-native-gesture-handler';
import colors from '../constants/colors';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';

const NativeButton = ({textName, onClick, buttonWidth, buttonHeight, bgColor}) => {
  return (
    
      <TouchableHighlight
        style={[
          styles.cardContainer,
          {
            width: wp(buttonWidth),
            height: hp(buttonHeight) || hp('7%'),
            backgroundColor: bgColor || colors.app_Tint,
            borderColor: bgColor || colors.app_Tint,
          },
        ]}
        onPress={onClick}
        underlayColor={colors.app_color_primary}>
        <Text style={styles.text}> {textName} </Text>
      </TouchableHighlight>
    
  );
};
export default NativeButton;

const styles = StyleSheet.create({
  text: {
    fontSize: 20,
    color: 'white',
  },
  cardContainer: {
    flexDirection: 'row',
    padding: 10,
    borderRadius: 20,
    borderRadius: 20,
    borderColor: colors.app_Tint,
    backgroundColor: colors.app_Tint,
    justifyContent: 'center',
  },
});
