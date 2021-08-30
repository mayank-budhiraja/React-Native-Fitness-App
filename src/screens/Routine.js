import React from 'react';
import {View, Text, Button, Image} from 'react-native';
import screenNames from '../constants/navigation';
//import items from '../assets/Chest/bulgarian_pushup.gif';
import FastImage from 'react-native-fast-image'

export default class Routine extends React.Component {
  static navigationOptions = {
    title: 'Welcome to the app!',
  };

  render() {
    const {item} = this.props.route.params;
    console.log('findThis', item);
    return (
      <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
        <Text>Routine One</Text>
        <Button
          title="Go to two"
          onPress={() => this.props.navigation.navigate(screenNames.EXERCISE)}
        />
        <FastImage source={items} style={{width: 200, height: 200}} />
      </View>
    );
  }
}
