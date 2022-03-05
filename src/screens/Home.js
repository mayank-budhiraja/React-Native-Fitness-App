import React, {useState, useEffect} from 'react';
import {
  Text,
  View,
  FlatList,
  StyleSheet,
  BackHandler,
  Alert,
  TouchableOpacity,
} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';
import {useFocusEffect} from '@react-navigation/native';
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
import FastImage from 'react-native-fast-image';
import Icon from 'react-native-vector-icons/Ionicons';
import {color} from 'react-native/Libraries/Components/View/ReactNativeStyleAttributes';
import MainCard from '../components/MainCard';

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
      <View style={{backgroundColor: colors.solidWhite, paddingBottom: 30}}>
        <Header userName={'User'} subTitle={'Personal Fitness'} />
        <MainCard
          image={require('../assets/images/Home/legs.png')}
          headerText={'Full Body Workout'}
          subHeaderText={'Intermediate'}
          timeText={'20 mins'}
        />
      </View>
      <View style={{backgroundColor: colors.solidWhite, marginTop: 10}}>
        <Text style={styles.routinesHeader}>Workout Routines</Text>
        <FlatList
          data={home.feedData}
          renderItem={renderItem}
          keyExtractor={(item) => item.id}
          style={styles.flatListContainer}
          horizontal
        />
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  routinesHeader: {
    color: colors.description,
    fontSize: 20,
    fontWeight: '700',
    marginTop: 20,
    marginLeft: 20,
    letterSpacing: 1
  },
  homeCard: {
    marginHorizontal: 20,
    borderWidth: 2,
    marginTop: 50,
  },
  mainImage: {
    position: 'absolute',
  },
  flatListContainer: {
    marginTop: 20,
  },
  mainContainer: {
    backgroundColor: colors.homeBG,
    flex: 1,
  },
  container: {
    backgroundColor: colors.secondary_container,
    height: hp('65%'),
    width: wp('100%'),
    marginTop: hp('35%'),
    position: 'absolute',
    zIndex: -1,
  },
});

export default Home;
