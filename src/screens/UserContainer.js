import React, { useState } from 'react';
import {View, Text, StyleSheet, TextInput, Alert} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import NativeButton from '../components/NativeButton';
import colors from '../constants/colors';
import screenNames from '../constants/navigation';

const UserContainer = ({navigation}) => {

    const [user, setUser] = useState('');
    const [age, setAge] = useState('');

    const onNext = () => {
        if(user !== '' && age !== ''){
            navigation.navigate(screenNames.HOME)
        }
        Alert.alert('Please fill the required details', 'Check the name')
        // to-do improve info here
    }
  return (
    <SafeAreaView style={styles.mainContainer}>
      <View style={styles.container}>
        <View>
          <Text style={styles.header}>Hello User</Text>
        </View>
        <View style={styles.subHeader}>
            <Text>Please enter your name and age</Text>
            <TextInput placeholder=" Full Name" style={styles.userInput} />
            <TextInput placeholder=" Age " style={styles.userInput}/>
        </View>
        <View style={styles.buttonContainer}>
          <NativeButton
            textName="Next"
            onClick={() => onNext()}
            buttonWidth={'60%'}
          />
        </View>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  buttonContainer: {
    flexDirection: 'column',
    justifyContent: 'flex-end',
    alignItems: 'center',
    top: hp('10%'),
  },
  header: {
    fontSize: 30,
    fontWeight: '700',
    color: colors.app_color_primary,
    top: 40,
    left: 30,
  },
  container: {
    backgroundColor: colors.solidWhite,
    height: hp('65%'),
    width: wp('100%'),
    borderTopRightRadius: 80,
    borderTopLeftRadius: 80,
    marginTop: 300,
  },
  mainContainer: {
    backgroundColor: colors.app_Tint,
    flexDirection: 'column',
    alignItems: 'flex-end',
  },
  subHeader: {
    marginHorizontal: 30,
    marginTop: hp('10%'),
  },
  userInput: {
      marginTop: 20, 
      borderColor: colors.app_color_secondary,
      borderWidth: 1,
      height: hp('5%'),
  }
});
export default UserContainer;
