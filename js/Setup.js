/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

'use strict';

import React, { Component } from 'react';
import {
    Image,
    View,
    TouchableHighlight,
    Animated,
    Easing,
    StyleSheet,
    Text
} from 'react-native';
import {
    StackNavigator,
    DrawerNavigator
} from 'react-navigation';

import ReadingPage from './ReadingPage';
import HomePage from './HomePage';
import Screen1 from './Screen1';
import Screen2 from './Screen2';
import Screen3 from './Screen3';
import DrawerContainer from './DrawerContainer';

const noTransitionConfig = () => ({
      transitionSpec: {
      duration: 0,
      timing: Animated.timing,
      easing: Easing.step0
      }
});

const DrawerStack = DrawerNavigator({
                                    screen1: { screen: Screen1 },
                                    screen2: { screen: Screen2 },
                                    screen3: { screen: Screen3 },
                                    }, {
                                    gesturesEnabled: false,
                                    contentComponent: DrawerContainer
                                    });

const drawerButton = (navigation) =>
    <TouchableHighlight
    onPress={() => {
        if (navigation.state.index === 0) {
            navigation.navigate('DrawerOpen')
        } else {
            navigation.navigate('DrawerClose')
        }
    }}>
        <Image style={{resizeMode:'center'}}
        source={require("../common/img/menu_home.png")}
        />
    </TouchableHighlight>


const DrawerNavigation = StackNavigator({
        DrawerStack: { screen: DrawerStack }
        }, {
        navigationOptions: ({navigation}) => ({
              headerTitle:
                  <Image
                  source={require('../common/img/title_home.png')}
                  style={{resizeMode: 'center'}}
                  />,
              headerStyle: {
              backgroundColor: '#00cec9'
              },
              gesturesEnabled: false,
              headerLeft: drawerButton(navigation)
              })
        });

const RootStack = StackNavigator(
     {
     Home: {
     screen: HomePage,
     },
     Reading: {
     screen: ReadingPage,
     },
}
);

const PrimaryNav = StackNavigator({
      rootStack: { screen: RootStack },
      drawerStack: { screen: DrawerNavigation },
      // Default config for all screens
      },{
              headerMode: 'none',
              title: 'Main',
              initialRouteName: 'rootStack',
              transitionConfig: noTransitionConfig
      });

const styles = StyleSheet.create({
                                 
                                 headerPattern: {
                                 flex: 1,
                                 resizeMode: 'center',
                                 },
                                 
                                 });

export default PrimaryNav;
