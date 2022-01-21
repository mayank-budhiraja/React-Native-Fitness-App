import React from 'react';
import {connect} from 'react-redux';
import {SafeAreaProvider} from 'react-native-safe-area-context';
import {View, Text, StyleSheet} from 'react-native';
import PauseTime from '../components/PauseTime';
import Sound from '../components/Sound';
import settings from '../store/actions/settings';
import colors from '../constants/colors';

class Settings extends React.Component {
  constructor(props) {
    super(props);
  }

  updatePauseTime = () => {
    this.props.setPauseTime(data);
  };

  updateSound = (data) => {
    this.props.toggleSound(data);
  };

  render() {
    return (
      <SafeAreaProvider style={{flex: 1, backgroundColor: 'white'}}>
        <View style={styles.container}>
          <View style={styles.headerContainer}>
            <Text style={styles.header}>Settings</Text>
          </View>
          <View style={styles.subContainer}>
            <PauseTime
              buttonsData={this.props.pauseTimeOptions}
              onClick={this.updatePauseTime}
            />
          </View>
          <View style={styles.soundContainer}>
            <Sound
              soundInfo={this.props.soundInfo}
              toggleSound={this.updateSound}
            />
          </View>
        </View>
      </SafeAreaProvider>
    );
  }
}

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
    color: colors.app_color_primary
  },
});

const mapStateToProps = (state) => {
  return {
    soundInfo: state.settings.soundInfo,
    pauseTimeOptions: state.settings.pauseTimeOptions,
  };
};

const mapDispatchToProps = {
  toggleSound: settings.toggleSound,
  setPauseTime: settings.setPauseTime,
};

const SettingsWrapper = connect(mapStateToProps, mapDispatchToProps)(Settings);

export default SettingsWrapper;
