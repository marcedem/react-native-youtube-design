import React from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';

export default class App extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <View style={styles.navBar}>
          <Image source={require('./img/yt_logo_rgb_light.png')} style={styles.youtubeLogo}/>
          <View style={styles.rightNav}>
            <Icon name="search" style={styles.searchIcon}/>
            <Icon name="account-circle" style={styles.searchIcon}/>
          </View>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  navBar: {
    height: 55,
    backgroundColor: '#FFF',
    elevation: 3,
    paddingHorizontal: 15,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  youtubeLogo:{
    width: 98,
    height: 22,
  },
  rightNav:{
    flexDirection: 'row'
  }
  searchIcon:{
    fontSize: 25,
  }
});
