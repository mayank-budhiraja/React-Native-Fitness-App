import React from 'react';
import {Text, TouchableOpacity, View} from 'react-native';
import {connect} from 'react-redux';
import {home} from '../store/actions';
import screenNames from '../constants/navigation';
import chestWorkout from '../utils/workout';
class Home extends React.PureComponent {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.props.getFeedData(1);
  }

  

  render() {
    return (
      <View>
        <Text>{this.props.feedData ? this.props.feedData : 'Default'}</Text>

        <TouchableOpacity
          onPress={() => {
            this.props.navigation.navigate(screenNames.ROUTINE, {
              item: chestWorkout.bulgarian_pushup,
            });
          }}>
          <Text>Routine 1</Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => {
            this.props.navigation.navigate(screenNames.ROUTINE, {
              item: 'Workout2',
            });
          }}>
          <Text>Routine 2</Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => {
            this.props.navigation.navigate(screenNames.ROUTINE, {
              item: 'Workout3',
            });
          }}>
          <Text>Routine 3</Text>
        </TouchableOpacity>
      </View>
    );
  }
}
const mapStateToProps = (state) => {
  return {
    feedData: state.home.feedData,
  };
};

const mapDispatchToProps = {
  getFeedData: home.getFeedData,
};

const HomeWrapper = connect(mapStateToProps, mapDispatchToProps)(Home);

export default HomeWrapper;
