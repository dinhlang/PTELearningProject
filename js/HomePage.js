/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

'use strict';

import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
    Dimensions,
    Button,
    Image,
    View,
    TouchableHighlight,
} from 'react-native';
import {
    StackNavigator,
} from 'react-navigation';

const SKIP_BTN_HEIGHT = 24,
WINDOW_WIDTH = Dimensions.get("window").width,
WINDOW_HEIGHT = Dimensions.get("window").height,
VERTICAL_BREAKPOINT = WINDOW_HEIGHT <= 600,
HEADER_HEIGHT = VERTICAL_BREAKPOINT ? 220 : 285,
SKIP_BTN_MARGIN_TOP = VERTICAL_BREAKPOINT ? 15 : 23,
WHENWHERE_PADDING_TOP = VERTICAL_BREAKPOINT ? 12 : 18,
RENDER_ARROW_SECTION = VERTICAL_BREAKPOINT ? false : true,
LOGIN_PADDING_BOTTOM = VERTICAL_BREAKPOINT ? 20 : 33,
CONTENT_PADDING_H = VERTICAL_BREAKPOINT ? 15 : 20;


export default class HomePage extends Component<{}> {
    render() {
        return (
                
                <View style={styles.container}>
                    <Image
                    source={require("../common/img/bg.png")}
                    style={styles.bg_home}
                    />
                
                </View>
                
        );
    }
}

const styles = StyleSheet.create({
                                 
            
                                 
                 container: {
                 flex: 1,
                 alignItems:'center',
                 justifyContent:'center'
                 },
                                 
                 bg_home: {
                 flex: 1,
                 alignSelf: 'stretch',
                 width: null,
                 height: null
                 },
                                 
                 headerPattern: {
                 flex: 1,
                 resizeMode: 'center',
                 },
                                 
                 content: {
                 flex: 1,
                 justifyContent: "space-around",
                 paddingHorizontal: CONTENT_PADDING_H
                 },

    });

