import React, {useState, useEffect} from 'react';
import {Text, View, FlatList, StyleSheet} from 'react-native';
import {SafeAreaProvider, SafeAreaView} from 'react-native-safe-area-context';
import {useDispatch, useSelector} from 'react-redux';
import Card from '../components/Card';
import Header from '../components/Header';
import SubHeader from '../components/SubHeader';
import subCategories from '../assets/data/subCategories';
import defaultUser from '../assets/defaults/user.png';

const Home = ({navigation}) => {
  const home = useSelector((state) => state.home);
  const [currenDate, setDate] = useState('');

  useEffect(() => {
    /*const date = new Date();
    const subTitle =
      date.getDate() + '/' + (date.getMonth() + 1) + '/' + date.getFullYear();
    setDate(subTitle);
    */
  }, []);

  renderItem = ({item}) => (
    <Card
      image={item.image}
      navigation={navigation}
      routineData={item.routineData}
      cardColor={item.color}
    />
  );

  return (
    <SafeAreaView style={{flex: 1, backgroundColor: 'white'}}>
      <View style={{marginBottom: 30}}>
        <Header
          userImage={defaultUser}
          userName={'New User'}
          subTitle={currenDate}
        />
      </View>
      <View style={{margin: 10, marginTop: -20}}>
        <SubHeader data={subCategories} />
      </View>

      <View style={{flex: 1, marginTop: -10}}>
        <FlatList
          data={home.feedData}
          renderItem={renderItem}
          keyExtractor={(item) => item.id}
          style={styles.flatListContainer}
        />
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  flatListContainer: {},
});

export default Home;
