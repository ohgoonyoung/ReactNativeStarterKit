/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View,TouchableOpacity} from 'react-native';

import registerScreens, {startApp, showOverlay, push} from './src/screens';

import { Navigation } from "react-native-navigation";

type Props = {};
export default class App extends Component<Props> {
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.welcome}>React Native Navigation v2</Text>
        <TouchableOpacity onPress={() => startApp('launch')}><Text style={styles.instructions}>Move Launch Page</Text></TouchableOpacity>
        <TouchableOpacity onPress={() => startApp('login')}><Text style={styles.instructions}>Move Login Page</Text></TouchableOpacity>

        <Text style={styles.welcome}>Push</Text>
        <TouchableOpacity onPress={() => push('items')}><Text style={styles.instructions}>Push items Page</Text></TouchableOpacity>
        <TouchableOpacity onPress={() => Navigation.popTo('navigation.push.itemDetail')}><Text style={styles.instructions}>Push itemDetail Page</Text></TouchableOpacity>

        <Text style={styles.welcome}>Overlay</Text>
        <TouchableOpacity onPress={() => showOverlay('overlay')}><Text style={styles.instructions}>Overlay</Text></TouchableOpacity>
        
        <Text style={styles.welcome}>Tabs</Text>
        <TouchableOpacity onPress={() => startApp('home')}><Text style={styles.instructions}>Move Home Page</Text></TouchableOpacity>

      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});