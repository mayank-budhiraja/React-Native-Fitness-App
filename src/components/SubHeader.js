import React from 'react';
import {View, Text, StyleSheet, FlatList} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import {homeActions} from '../store/actions/home';
import {TouchableOpacity} from 'react-native-gesture-handler';
import colors from '../constants/colors';

const SubHeader = () => {
  const home = useSelector((state) => state.home);
  const dispatch = useDispatch();

  renderItem = ({item}) => {
    const selected = item.selected && home.selectID 
    return (
      <View
        style={
          selected != 0
            ? styles.selectedContainer
            : styles.itemContainer
        }>
        <TouchableOpacity
          onPress={() =>
            dispatch(homeActions.setHomeData(item.id, item.routineDifficulty))
          }>
          <Text style={[ selected != 0 ? {color: colors.subcat_button_text} : {}, styles.subcategoryText]}>{item.title}</Text>
        </TouchableOpacity>
      </View>
    );
  };

  return (
    <View style={{marginHorizontal: 10}}>
      <Text style={styles.textContainer}> Categories </Text>
      <View style={styles.container}>
        <TouchableOpacity
          onPress={() => dispatch(homeActions.resetCategoryData())}
          style={[
            home.selectID == 0
              ? styles.selectedContainer
              : styles.itemContainer,
            styles.resetButton,
          ]}>
          <Text style={[ home.selectID == 0 ? styles.containerText : {color: 'black', fontWeight: '500'}]}>All</Text>
        </TouchableOpacity>
        <FlatList
          data={home.subData}
          renderItem={renderItem}
          keyExtractor={(item) => item.id.toString()}
          style={styles.flatListContainer}
          horizontal={true}
        />
      </View>
    </View>
  );
};

export default SubHeader;

const styles = StyleSheet.create({
  subcategoryText: {
    fontWeight: '500'
  },
  containerText: {
    color: 'white',
    fontWeight: '600',
  },
  selectedContainer: {
    borderWidth: 1,
    backgroundColor: colors.subcategory_button,
    borderColor: colors.subcategory_button,
    borderRadius: 15,
    marginRight: 10,
    padding: 10,
  },
  container: {
    flexDirection: 'row',
  },
  resetButton: {
    margin: 15,
  },
  flatListContainer: {
    margin: 15,
  },
  textContainer: {
    fontSize: 18,
    fontWeight: '600',
    marginLeft: 10,
  },
  itemContainer: {
    borderWidth: 1.5,
    borderColor: colors.subcategory_button,
    borderRadius: 15,
    marginRight: 10,
    padding: 10,
  },
});
