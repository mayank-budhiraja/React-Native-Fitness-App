import React from 'react';
import {View, Text, StyleSheet, Image, FlatList} from 'react-native';
import FastImage from 'react-native-fast-image';
import screenNames from '../constants/navigation';
import {connect} from 'react-redux';
import home from '../store/actions/home';
import {TouchableOpacity} from 'react-native-gesture-handler';

const SubHeader = ({subData, selectID, setHomeData, resetCategoryData}) => {
  renderItem = ({item}) => {
    return (
      <View
        style={
          item.selected && selectID != 0
            ? styles.selectedContainer
            : styles.itemContainer
        }>
        <TouchableOpacity
          onPress={() => setHomeData(item.id, item.routineDifficulty)}>
          <Text>{item.title}</Text>
        </TouchableOpacity>
      </View>
    );
  };

  return (
    <View>
      <Text style={styles.textContainer}> Categories </Text>
      <View style={styles.container}>
        <TouchableOpacity
          onPress={() => resetCategoryData()}
          style={[
            selectID == 0 ? styles.selectedContainer : styles.itemContainer,
            styles.resetButton,
          ]}>
          <Text style={styles.containerText}>All</Text>
        </TouchableOpacity>
        <FlatList
          data={subData}
          renderItem={renderItem}
          keyExtractor={(item, index) => item.id.toString()}
          style={styles.flatListContainer}
          horizontal={true}
        />
      </View>
    </View>
  );
};

const mapStateToProps = (state) => {
  return {
    subData: state.home.subData,
    selectID: state.home.selectID,
  };
};

const mapDispatchToProps = {
  setHomeData: home.setHomeData,
  resetCategoryData: home.resetCategoryData,
};

const SubCategoryWrapper = connect(
  mapStateToProps,
  mapDispatchToProps,
)(SubHeader);

export default SubCategoryWrapper;

const styles = StyleSheet.create({
  containerText: {
    color: 'white',
  },
  selectedContainer: {
    borderWidth: 1,
    backgroundColor: 'blue',
    borderColor: 'blue',
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
    fontSize: 14,
    marginLeft: 15,
  },
  itemContainer: {
    borderWidth: 1,
    borderColor: 'blue',
    borderRadius: 15,
    marginRight: 10,
    padding: 10,
  },
});
