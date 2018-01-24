import React from 'react';
import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import VideoItem from './components/videoItem';
export default class App extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <View style={styles.navBar}>
          <Image source={require('./img/yt_logo_rgb_light.png')} style={styles.youtubeLogo}/>
          <View style={styles.rightNav}>
            <TouchableOpacity>
              <Icon style={styles.navItem} name="search" size={25}/>  
            </TouchableOpacity>
            <Icon style={styles.navItem} name="account-circle" size={25}/>
          </View>
        </View>
        <View style={styles.body}>

        </View>
        <View style={styles.tabBar}>
          <TouchableOpacity style={styles.tabItem}>
            <Icon name="home" size={25} />
            <Text style={styles.tabTitle}>Home</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.tabItem}>
            <Icon name="whatshot" size={25} />
            <Text style={styles.tabTitle}>Trending</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.tabItem}>
            <Icon name="subscriptions" size={25} />
            <Text style={styles.tabTitle}>Subsriptions</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.tabItem}>
            <Icon name="notifications" size={25} />
            <Text style={styles.tabTitle}>Activity</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.tabItem}>
            <Icon name="folder" size={25} />
            <Text style={styles.tabTitle}>Library</Text>
          </TouchableOpacity>
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
  },
  navItem:{
    marginLeft: 25,
  },
  body:{
    flex: 1,
  },
  tabBar: {
    backgroundColor: '#FFF',
    height: 60,
    borderTopWidth: 0.5,
    borderColor: '#E5E5E5', 
    flexDirection: 'row',
    justifyContent: 'space-around',
  },
  tabItem:{
    alignItems: 'center',
    justifyContent: 'center',
  },
  tabTitle:{
    color: '#3C3C3C',
    fontSize: 11,
  },
});
