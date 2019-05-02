/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, { Component } from 'react';
import { Platform, StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import { Navigation } from "react-native-navigation";
import { connect } from 'react-redux';
import { goToHome, goToLaunch, goToTutorial } from '../navigation';
import Launch from './Launch';

import Helper from '../js/common/Helper.js';

type Props = {};
export class Setup extends Component<Props> {

  componentDidMount() {
    setTimeout(function () {
      /*
      Helper.getAsyncStorage("isTutorial").then((response) => {
        var isTutorial = response;
        //튜토리얼로 이동
        if (isTutorial == null || isTutorial == "false") {
          return goToTutorial();
        }

        //홈으로 이동
        return goToHome();

      }).catch(err => {
        //홈으로 이동
        return goToHome();
      });
      */
    }, 1000);

  }
  render() {
    return <Launch />;
  }
}

const mapStateToProps = (state) => {
  return {
    isLoggedIn: state.auth.isLoggedIn
  }
}

const mapDispatchToProps = {
}

export default connect(mapStateToProps, mapDispatchToProps)(Setup);
