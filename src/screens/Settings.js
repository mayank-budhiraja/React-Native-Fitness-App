import React, {useEffect, useState} from 'react';
import {connect, useDispatch, useSelector} from 'react-redux';
import {SafeAreaProvider, SafeAreaView} from 'react-native-safe-area-context';
import {View, Text, StyleSheet} from 'react-native';
import PauseTime from '../components/PauseTime';
import Sound from '../components/Sound';
import settings from '../store/actions/settings';
import colors from '../constants/colors';

const Settings = () => {
  const settingState = useSelector((state) => state.settings);
  const dispatch = useDispatch();

  const [pauseTimeOptions, setOptions] = useState(
    settingState.pauseTimeOptions,
  );
  const [soundInfo, setSound] = useState(settingState.soundInfo);

  updatePauseTime = () => {
    const data = settingState.pauseTimeOptions.filter(i => i.selected)
    dispatch(settings.setBreakTime(data[0].value))
  };

  updateSound = () => {
    const data = !soundInfo;
    setSound(data);
    dispatch(settings.toggleSound(data));
  };

  useEffect(() => {}, [pauseTimeOptions, soundInfo]);

  return (
    <SafeAreaView style={{flex: 1, backgroundColor: 'white'}}>
      <View style={styles.container}>
        <View style={styles.headerContainer}>
          <Text style={styles.header}>Settings</Text>
        </View>
        <View style={styles.subContainer}>
          <PauseTime buttonsData={pauseTimeOptions} onClick={updatePauseTime} />
        </View>
        <View style={styles.soundContainer}>
          <Sound soundInfo={soundInfo} toggleSound={updateSound} />
        </View>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  subContainer: {
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    top: 20,
  },
  soundContainer: {
    top: 30,
    marginLeft: 10,
  },
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
  headerContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
  },
  header: {
    fontSize: 40,
    fontWeight: '600',
    color: colors.app_color_primary,
  },
});

export default Settings;
