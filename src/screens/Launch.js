/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, { Component } from 'react';
import { Platform, StyleSheet, Text, View, TouchableOpacity, Image, ImageBackground } from 'react-native';
import PropTypes from 'prop-types';
import { goToHome, goToTutorial, goToProfile1, goToProfile2 } from '../navigation';
import { Navigation } from "react-native-navigation";

import Menu from '../menu';
import Helper from '../js/common/Helper.js';

type Props = {};
export default class Launch extends Component<Props> {
  state = {
    count: 0
  }

  setTutorial = () => {
    let { count } = this.state;
    count++;
    this.setState({ count: count })
    if (count >= 5) {
      Helper.setAsyncStorage("isTutorial", "false").then(res => { });
    }
  }

  componentDidMount() {
    console.log(" Menu.stack.Launch.nav.topBar : ", Menu.stack.Launch.nav.topBar);
  }

  render() {
    return (
      <View style={{justifyContent:'center',alignItems:'center', flex : 1}}>
        <Text>Launch page</Text>
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

Launch.propTypes = {
  componentId: PropTypes.string.isRequired,
}

Launch.options = () => ({
  stautsBar: Menu.stack.Launch.nav.statusBar,
  topBar: Menu.stack.Launch.nav.topBar
})
