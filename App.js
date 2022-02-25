import 'react-native-gesture-handler';
import React from 'react';
import {PersistGate} from 'redux-persist/es/integration/react';
import {Provider} from 'react-redux';
import {store, persistor} from './src/store';

import {Platform, StatusBar} from 'react-native';

import {SafeAreaProvider} from 'react-native-safe-area-context';

import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';

import Routine from './src/screens/RoutineList';
import Exercise from './src/screens/Exercise';
import Home from './src/screens/Home';
import Settings from './src/screens/Settings';
import RoutinePlaylist from './src/screens/RoutinePlaylist';
import CompleteExercise from './src/screens/CompleteExercise';

import screenNames from './src/constants/navigation';
import Icon from 'react-native-vector-icons/Ionicons';
import colors from './src/constants/colors';
import Splash from './src/screens/Splash';

import UserContainer from './src/screens/UserContainer';
import ListExercise from './src/screens/ListExercise';

import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import Analysis from './src/screens/Analysis';

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();
const iconSize = 30;

const App = () => {
  return (
    <>
      {Platform.OS === 'android' ? (
        <StatusBar backgroundColor={colors.solidWhite} barStyle='dark-content' />
      ) : null}
      <Provider store={store}>
        <PersistGate loading={null} persistor={persistor}>
          <SafeAreaProvider style={{flex: 1}}>
            <NavigationContainer>
              <HomeStack />
            </NavigationContainer>
          </SafeAreaProvider>
        </PersistGate>
      </Provider>
    </>
  );
};

const HomeStack = () => {
  return (
    <Stack.Navigator
      screenOptions={{headerShown: false}}
      initialRouteName={screenNames.SPLASH_SCREEN}>
      <Stack.Screen name={screenNames.SPLASH_SCREEN} component={Splash} />
      <Stack.Screen
        name={screenNames.USER_CONTAINER}
        component={UserContainer}
      />
      <Stack.Screen
        name={screenNames.HOME}
        component={TabNav}
        options={Platform.OS === 'ios' ? {gestureEnabled: false} : {}}
      />
      <Stack.Screen name={screenNames.ROUTINE} component={Routine} />
      <Stack.Screen name={screenNames.EXERCISE} component={Exercise} />
      <Stack.Screen
        name={screenNames.EXERCISE_COMPLETED}
        component={CompleteExercise}
      />
      <Stack.Screen
        name={screenNames.ROUTINEPLAYLIST}
        component={RoutinePlaylist}
      />
    </Stack.Navigator>
  );
};

const TabNav = () => {
  return (
    <Tab.Navigator
      tabBarOptions={{
        style: {
          height: hp('7%'),
          backgroundColor: colors.secondary_container,
        },
      }}>
      <Tab.Screen
        name={screenNames.HOME}
        component={Home}
        options={{
          tabBarLabel: '',
          tabBarOptions: {
            activeTintColor: colors.app_Tint,
          },
          tabBarIcon: (tabInfo) => {
            return (
              <Icon
                name="home"
                size={iconSize}
                color={
                  tabInfo.focused ? colors.app_Tint : colors.app_color_secondary
                }
                style={{top: 10}}
              />
            );
          },
        }}
      />
      <Tab.Screen
        name={screenNames.LIST_EXERCISE}
        component={ListExercise}
        options={{
          tabBarLabel: '',
          tabBarOptions: {
            activeTintColor: colors.app_Tint,
          },
          tabBarIcon: (tabInfo) => {
            return (
              <Icon
                name="md-calendar-outline"
                size={iconSize}
                color={
                  tabInfo.focused ? colors.app_Tint : colors.app_color_secondary
                }
                style={{top: 10}}
              />
            );
          },
        }}
      />
      <Tab.Screen
        name={screenNames.ANALYSIS}
        component={Analysis}
        options={{
          tabBarLabel: '',
          tabBarOptions: {
            activeTintColor: colors.app_Tint,
          },
          tabBarIcon: (tabInfo) => {
            return (
              <Icon
                name="stats-chart-outline"
                size={iconSize}
                color={
                  tabInfo.focused ? colors.app_Tint : colors.app_color_secondary
                }
                style={{top: 10}}
              />
            );
          },
        }}
      />
      <Tab.Screen
        name={screenNames.SETTINGS}
        component={Settings}
        options={{
          tabBarLabel: '',
          tabBarOptions: {
            activeTintColor: colors.app_Tint,
          },
          tabBarIcon: (tabInfo) => {
            return (
              <Icon
                name="options-outline"
                size={iconSize}
                color={
                  tabInfo.focused ? colors.app_Tint : colors.app_color_secondary
                }
                style={{top: 10}}
              />
            );
          },
        }}
      />
    </Tab.Navigator>
  );
};

export default App;
