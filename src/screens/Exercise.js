import React from 'react';
import {View, Text, Button} from 'react-native';
import screenNames from '../constants/navigation';

export default class Exercise extends React.Component {
  render() {
    return (
      <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
        <Text>Exercise One</Text>
        <Button
          title="Go to two"
          onPress={() => this.props.navigation.navigate(screenNames.EXERCISE)}
        />
      </View>
    );
  }
}
