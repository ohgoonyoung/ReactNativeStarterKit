import React, { Component } from 'react';
import { StyleSheet, View, Text} from 'react-native';

type Props = {};
export default class Splash extends Component<Props> {
  render() {
    return(
      <View style={styles.container}>
          <Text>Splash 화면</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center', alignItems: 'center', flex: 1,
    padding : 30
  }
});
