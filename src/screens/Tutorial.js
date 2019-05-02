/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, { Component } from 'react';
import { Platform, StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import Swiper from 'react-native-swiper'

import Helper from '../js/common/Helper';
import { goToSetup } from '../navigation';

type Props = {};
export default class Tutorial extends Component<Props> {

  start = () => {
    Helper.setAsyncStorage("isTutorial", "true").then(res => {
      goToSetup();
    });
  }

  componentDidMount() {
    Helper.setAsyncStorage("isTutorial", "false").then(res => {
    });
  }

  toNext = (index) => {
    this.swiper.scrollBy(index);
  }

  render() {

    return (
      <View style={{justifyContent:'center',alignItems:'center'}}>
        <Text>Tutorial page</Text>
      </View>

    );
    return (
      <Swiper animated={true} index={0} style={styles.wrapper}  dot={<View style={{backgroundColor: 'rgba(0,0,0,.2)', width: 18, height: 5, borderRadius: 4, marginLeft: 3, marginRight: 3, marginTop: 3, marginBottom: 3}} />}
      activeDot={<View style={{backgroundColor: '#000', width: 18, height: 8, borderRadius: 4, marginLeft: 3, marginRight: 3, marginTop: 3, marginBottom: 3}} />}
      paginationStyle={{
        bottom: null, left: 30, right: null, top:50
      }} loop
      ref={r=>this.swiper=r}
      >

    <View style={styles.slide1}>
      <Text style={styles.title_text}>튜토리얼 1</Text>
      <View style={styles.right_bottom_image}>
        <TouchableOpacity onPress={this.toNext.bind(this,1)} style={{backgroundColor:'yellow', borderRadius:50, width : 50, height : 50, justifyContent:'center', alignItems:'center'}}>
          <Text>다음</Text>
        </TouchableOpacity>
      </View>
    </View>
    <View style={styles.slide2}>
      <Text style={styles.title_text}>튜토리얼 2</Text>
      <View style={styles.right_bottom_image}>
        <TouchableOpacity onPress={this.toNext.bind(this,1)} style={{backgroundColor:'yellow', borderRadius:50, width : 50, height : 50, justifyContent:'center', alignItems:'center'}}>
          <Text>다음</Text>
        </TouchableOpacity>
      </View>
    </View>
    <View style={styles.slide3}>
      <Text style={styles.title_text}>튜토리얼 3</Text>
      <View style={styles.right_bottom_image}>
        <TouchableOpacity onPress={this.start} style={{backgroundColor:'yellow', borderRadius:50, width : 50, height : 50, justifyContent:'center', alignItems:'center'}}>
          <Text>시작</Text>
        </TouchableOpacity>
      </View>
    </View>
    </Swiper>
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
  slide1: {
    flex: 1,
    justifyContent: 'flex-start',
    alignItems: 'flex-start',
    backgroundColor: 'white',
    paddingTop:100,
  },
  slide2: {
    flex: 1,
    justifyContent: 'flex-start',
    alignItems: 'flex-start',
    backgroundColor: 'white',
    paddingTop:100,
  },
  slide3: {
    flex: 1,
    justifyContent: 'flex-start',
    alignItems: 'flex-start',
    backgroundColor: 'white',
    paddingTop:100,
  },
  right_bottom_image:{
    flex:1,
    justifyContent: 'flex-end',
    alignItems: 'flex-end',
    width:'100%',
    paddingRight:20,
    paddingBottom:20,
  },
});

/*
Tutorial.options = () => ({
  statusBar: Menu.stack.Launch.nav.statusBar,
  topBar: Menu.stack.Launch.nav.topBar
})
*/
