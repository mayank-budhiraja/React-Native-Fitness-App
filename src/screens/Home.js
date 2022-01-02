import React from 'react';
import {
  Text,
  TouchableOpacity,
  View,
  FlatList,
  StyleSheet,
  SafeAreaView,
} from 'react-native';
import {connect} from 'react-redux';
import {home} from '../store/actions';
import screenNames from '../constants/navigation';
import chestWorkout from '../utils/workout';
import Card from '../components/Card';
import assets from '../assets/assets-constants';
import Header from '../components/Header';
import SubHeader from '../components/SubHeader';
import subCategories from '../assets/data/subCategories';
import defaultUser from '../assets/defaults/user.png';

class Home extends React.PureComponent {
  constructor(props) {
    super(props);
  }

  renderItem = ({item}) => <Card image={item.image} navigation={this.props.navigation} routineName={item.routine_name} />;

  render() {
    return (
      <SafeAreaView style={{flex: 1}}>
        <Header userImage={defaultUser} userName={'New User'}/>
        <SubHeader data={subCategories}/>
        <View style={{flex: 1}}>
          <FlatList
            data={this.props.feedData}
            renderItem={this.renderItem}
            keyExtractor={(item) => item.id}
            style={styles.flatListContainer}
          />
        </View>
      </SafeAreaView>
    );
  }
}

const styles = StyleSheet.create({
  flatListContainer: {
    
  },
});

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
