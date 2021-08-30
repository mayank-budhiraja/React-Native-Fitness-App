import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import React from 'react';
import { View, Text, Button } from 'react-native';
import HomeStack from './src/screens/HomeStack';
import Reports from './src/screens/Reports';

const Tab = createBottomTabNavigator();

class HomeStack extends React.PureComponent {
    render() {
      return (
        <Tab.Navigator>
          <Tab.Screen name="HomeStack" component={HomeStack} 
          options={({ route }) => ({
            tabBarLabel: 'Home',
            tabBarVisible: route.state && route.state.index === 0
          })} />
          
          <Tab.Screen name="Reports" component={Reports} />
        </Tab.Navigator>
      );
    }
  }

export default HomeStack;

