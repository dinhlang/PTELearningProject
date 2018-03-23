/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

'use strict';

import React, { Component } from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';

export default class Screen3 extends Component {
    static navigationOptions = {
    drawerLabel: 'Screen Three',
    drawerIcon: () => (
                       <Image
                       source={{uri: "https://dummyimage.com/60x60/000/fff.jpg&text=3"}}
                       style={{width: 30, height: 30, borderRadius: 15}}
                       />
                       )
    };
    
    render() {
        return (
                <View style={styles.container}>
                <Text>Screen3</Text>
                </View>
                );
    }
}

const styles = StyleSheet.create({
                                 container: {
                                 flex: 1,
                                 backgroundColor: '#fff',
                                 alignItems: 'center',
                                 justifyContent: 'center',
                                 },
                                 });

