import React, { Component } from 'react'
import { Text, View, StyleSheet, Image, Platform } from 'react-native'
import Icon from 'react-native-vector-icons/Ionicons';
import headerTitle from '../assets/img/icon-logo.png';

// tabs
import HomeTab from './TabNavigator/HomeTabs';
import SearchTab from './TabNavigator/SearchTab';
import AddMediaTab from './TabNavigator/AddMediaTab';
import LikeTab from './TabNavigator/LikeTab';
import ProfileTab from './TabNavigator/ProfileTab';

import { createBottomTabNavigator, createAppContainer } from 'react-navigation';
 
class MainScreen extends Component {

  static navigationOptions = {
    headerLeft: <Icon name="ios-camera" size={35} style={{marginLeft: 20}} />,
    title: "Instagram",
    headerTitle: (
      <Image source={headerTitle}/>
    ),
    headerRight: <Icon name="ios-send" size={35} style={{ marginRight: 20}} />
  }

  render() {
    return (
      <AppontainerBarBottom />
    )
  }
}

export default MainScreen;

const AppTabNavigator = createBottomTabNavigator({
  HomeTab: HomeTab,
  SearchTab: SearchTab,
  AddMediaTab: AddMediaTab,
  LikeTab: LikeTab,
  ProfileTab: ProfileTab
}, {
    animationEnabled: true,
    swipeEnabled: true,
    tabBarOptions: 'bottom',
    tabBarOptions: {
      style: {
          ...Platform.select({
            android: {
              backgroundColor: 'white'
            }
          })
      },
      activeTintColor: '#4a4a4a',
      inactiveTintColor: '#a4a4a4',
      showLabel: false,
      showIcon: true
    }
  });

const AppontainerBarBottom = createAppContainer(AppTabNavigator);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  }
});