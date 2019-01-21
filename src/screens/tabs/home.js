/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View, TouchableOpacity} from 'react-native';

import registerScreens, {startApp, showOverlay, push} from '../../screens';

import { Navigation } from "react-native-navigation";


type Props = {};
export default class home extends Component<Props> {

  constructor(props){
    super(props);

    Navigation.events().bindComponent(this);
  }

  componentDidAppear() {
    console.log('componentDidAppear');

    console.log(Navigation);
    console.log(this.props);
    Navigation.pop(this.props.componentId);
  }

  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.welcome}>This is home tab</Text>

        <TouchableOpacity onPress={() => Navigation.pop(this.props.componentId)}><Text style={styles.instructions}>pop</Text></TouchableOpacity>
        <TouchableOpacity onPress={() => Navigation.popToRoot(this.props.componentId)}><Text style={styles.instructions}>popToRoot</Text></TouchableOpacity>
        <TouchableOpacity onPress={() => Navigation.popTo(this.props.componentId)}><Text style={styles.instructions}>popTo</Text></TouchableOpacity>
        <TouchableOpacity onPress={() => Navigation.pop(this.props.componentId)}><Text style={styles.instructions}>pop</Text></TouchableOpacity>

        <TouchableOpacity onPress={() => push(this.props.componentId, 'items')}><Text style={styles.instructions}>Push items Page</Text></TouchableOpacity>
        <TouchableOpacity onPress={() => push('itemDetail')}><Text style={styles.instructions}>Push itemDetail Page</Text></TouchableOpacity>

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
