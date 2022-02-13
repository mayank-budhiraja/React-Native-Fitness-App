import React, {useState, useEffect} from 'react';
import {
  Text,
  View,
  FlatList,
  StyleSheet,
  BackHandler,
  Alert,
} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';
import { useFocusEffect } from '@react-navigation/native';
import {useSelector} from 'react-redux';
import Card from '../components/Card';
import Header from '../components/Header';
import SubHeader from '../components/SubHeader';
import subCategories from '../assets/data/subCategories';
import defaultUser from '../assets/defaults/user.png';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import colors from '../constants/colors';
import Icon from 'react-native-vector-icons/Ionicons';

const Home = ({navigation}) => {
  const home = useSelector((state) => state.home);

  useFocusEffect(
    React.useCallback(() => {
      BackHandler.addEventListener('hardwareBackPress', backAction);

      return () =>
        BackHandler.removeEventListener('hardwareBackPress', backAction);
    }, []),
  );

  const backAction = () => {
    Alert.alert('Hold on!', 'Are you sure you want to go back?', [
      {
        text: 'Cancel',
        onPress: () => null,
        style: 'cancel',
      },
      {text: 'YES', onPress: () => BackHandler.exitApp()},
    ]);

    return true;
  };

  renderItem = ({item}) => (
    <Card
      image={item.image}
      navigation={navigation}
      routineData={item.routineData}
      cardColor={item.color}
    />
  );

  return (
    <SafeAreaView style={styles.mainContainer}>
      <View opacity={0.1}>
        <Icon
          name="cloudy-night"
          size={25}
          color={"#F5CBB4"}
          style={styles.mainImage}
        />
      </View>
      <View style={{marginBottom: 30}}>
        <Header
          userImage={defaultUser}
          userName={home.userData.userName || 'User'}
        />
      </View>

      <View style={{marginTop: -20}}>
        <SubHeader data={subCategories} />
      </View>

      {/* <Text style={{fontSize: 20, marginHorizontal: 20, fontWeight: '700'}}> Practice </Text> */}

      <FlatList
        data={home.feedData}
        renderItem={renderItem}
        keyExtractor={(item) => item.id}
        style={styles.flatListContainer}
        numColumns={2}
      />

      <View style={styles.container}></View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  mainImage: {
    position: 'absolute',
    top: -100,
  },
  flatListContainer: {
   
  },
  mainContainer: {
    backgroundColor: colors.app_Tint,
    flex: 1,
  },
  container: {
    backgroundColor: '#F8F8F8',
    height: hp('65%'),
    width: wp('100%'),
    marginTop: hp('35%'),
    position: 'absolute',
    zIndex: -1,
  },
});

export default Home;
