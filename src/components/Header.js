import React from 'react';
import {View, Text, StyleSheet, Image} from 'react-native';
import Icon from 'react-native-vector-icons/AntDesign';
import colors from '../constants/colors';

const Header = ({userName, userImage, subTitle}) => {
  return (
    <View style={{flexDirection: 'column', marginTop: 10, marginHorizontal: 16}}>
      <View style={styles.container}>
        <View>
          <Text style={styles.userText}>Hello {userName}</Text>
          <Text style={styles.userSubtitle}>{subTitle}</Text>
        </View>
        <View style={styles.user}>
          <Icon name="user" size={30} color={'gray'} />
        </View>
      </View>
      <View style={styles.subTitle}>
        <Text>Don't Miss the Fitness</Text>
      </View>
    </View>
  );
};
export default Header;

const styles = StyleSheet.create({
  subTitle: {
    flexDirection: 'row',
    marginHorizontal: 20,
    top: -20,
  },
  user: {
    borderRadius: 35,
    borderWidth: 2,
    borderColor: 'gray',
    padding: 12,
  },
  userText: {
    fontSize: 22,
    fontWeight: '700',
    color: colors.app_color_primary
  },
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginHorizontal: 20,
    marginTop: 10,
  },
  cardContainer: {
    borderRadius: 10,
  },
  userSubtitle: {
    color: colors.app_color_secondary,
    fontWeight: '600'
  }
});
