/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View, TouchableOpacity} from 'react-native';

import registerScreens, {startApp, showOverlay, push} from '..';

import { Navigation } from "react-native-navigation";

import { Container, Header, Content, Footer, FooterTab, Button } from 'native-base';


type Props = {};
export default class home extends Component<Props> {

  constructor(props){
    super(props);

    Navigation.events().bindComponent(this);
  }

  componentDidAppear() {
    console.log('componentDidAppear');

    Navigation.pop(this.props.componentId);
  }

  render() {
    return (
      <Container>
        <Header></Header>
        <Content></Content>

        <Footer style={{height : 30}}>
        <FooterTab>
            <Button active>
              <Text>Apps</Text>
            </Button>
            <Button>
              <Text>Camera</Text>
            </Button>
            <Button>
              <Text>Navigate</Text>
            </Button>
            <Button>
              <Text>Contact</Text>
            </Button>
          </FooterTab>
        </Footer>
      </Container>
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
