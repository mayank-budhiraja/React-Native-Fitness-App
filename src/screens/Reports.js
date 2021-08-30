import React from 'react';
import { View, Text, Button } from 'react-native';

export default class Reports extends React.Component {
    
    static navigationOptions = {
      title: 'Welcome to the app!',
    };
  
    render() {
      return (
        <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
          <Text>Screen One</Text>
          <Button title="Go to two"
            onPress={() => this.props.navigation.navigate('routeTwo')}
          />
        </View>
      );
    }
  }