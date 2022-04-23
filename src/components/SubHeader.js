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
    const selected = item.selected && home.selectID;
    return (
      <View
        style={selected != 0 ? styles.selectedContainer : styles.itemContainer}>
        <TouchableOpacity
          onPress={() =>
            dispatch(homeActions.setHomeData(item.id, item.routineDifficulty))
          }>
          <Text
            style={[
              selected != 0
                ? {color: colors.app_Tint}
                : {color: colors.app_color_primary, fontWeight: '900'},
              styles.subcategoryText,
            ]}>
            {item.title}
          </Text>
        </TouchableOpacity>
      </View>
    );
  };

  return (
    <View style={{marginHorizontal: 15}}>
      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'space-between',
          marginBottom: 30,
        }}>
        <Text style={styles.textContainer}> Categories </Text>
        <Text
          style={{
            fontSize: 24,
            fontWeight: '700',
            color: 'white',
            right: 10,
          }}>
          All
        </Text>
      </View>

      {/* <View style={styles.container}>
        <TouchableOpacity
          onPress={() => dispatch(homeActions.resetCategoryData())}
          style={[
            home.selectID == 0
              ? styles.selectedContainer
              : styles.itemContainer,
            styles.resetButton,
          ]}>
          <Text
            style={[
              home.selectID == 0
                ? styles.containerText
                : {color: colors.app_color_primary, fontWeight: '600'},
            ]}>
            All
          </Text>
        </TouchableOpacity>
      </View>
      {/* <View style={styles.container}>
        <FlatList
          data={home.subData}
          renderItem={renderItem}
          keyExtractor={(item) => item.id.toString()}
          style={styles.flatListContainer}
          horizontal={true}
        />
      </View>*/}
    </View>
  );
};

export default SubHeader;

const styles = StyleSheet.create({
  subcategoryText: {
    fontWeight: '500',
  },
  containerText: {
    color: colors.app_Tint,
    fontWeight: '600',
  },
  selectedContainer: {
    borderWidth: 1,
    backgroundColor: colors.subcategory_button,
    borderColor: colors.app_Tint,
    borderRadius: 20,
    paddingHorizontal: 30,
    paddingVertical: 10,
    marginLeft: 5,
  },
  itemContainer: {
    borderRadius: 20,
    paddingHorizontal: 30,
    paddingVertical: 10,
    marginLeft: 5,
    backgroundColor: '#fff5ed',
  },
  container: {
    flexDirection: 'row',
  },
  resetButton: {
    paddingHorizontal: 30,
    fontSize: 20,
    color: colors.app_color_primary,
  },
  flatListContainer: {},
  textContainer: {
    fontSize: 24,
    fontWeight: '700',
    marginLeft: 0,
    color: colors.solidWhite,
  },
  itemContainer: {
    borderWidth: 1.5,
    borderColor: colors.subcategory_button,
    borderRadius: 15,
    marginRight: 10,
    padding: 10,
  },
});
