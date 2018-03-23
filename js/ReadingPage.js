

'use strict';

import React, { Component } from 'react';
import {
  Text,
  StyleSheet,
  View,
} from 'react-native';
import {
    StackNavigator,
} from 'react-navigation';


export default class ReadingPage extends Component<{}> {
    static navigationOptions = ({ navigation }) => {
        return {
        title: 'READING SKILLS',
        }
    };
    render() {
        const { state, navigate } = this.props.navigation;
        return (
                
                <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
                <Text>Details Screen</Text>
                </View>
                );
    }
}

const styles = StyleSheet.create({
                                 description: {
                                 fontSize: 35,
                                 color: '#2e86de',
                                 textAlign: 'center',
                                 marginTop: 100,
                                 },
                                 container: {
                                 flex: 1,
                                 },
                                 
                                 });
