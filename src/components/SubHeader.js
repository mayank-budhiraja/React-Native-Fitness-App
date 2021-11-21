import React from 'react';
import {View, Text, StyleSheet, Image, FlatList} from 'react-native';
import FastImage from 'react-native-fast-image';
import screenNames from '../constants/navigation';

const SubHeader = ({data}) => {

  renderItem = ({item}) => 
  <View style={styles.itemContainer}>
    <Text>{item.title}</Text>
  </View>

  return (
    <View>
      <Text style={styles.textContainer}> Categories </Text>
      <FlatList
        data={data}
        renderItem={renderItem}
        keyExtractor={(item) => item.id}
        style={styles.flatListContainer}
        horizontal={true}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  flatListContainer: {
    margin: 15,
  },
  textContainer: {
    fontSize: 14,
    marginLeft: 15
  },
  itemContainer: {
    borderWidth: 1,
    borderColor: 'blue',
    borderRadius: 15,
    marginRight: 10,
    padding: 10
  }
});

export default SubHeader;
