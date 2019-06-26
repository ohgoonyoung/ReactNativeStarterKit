import React, { Component } from 'react';
import { StyleSheet, View, Text} from 'react-native';
import { WebView } from 'react-native-webview';
import {InjectedScript} from '../../js/webview/InjectedScript';

type Props = {};

export default class WebViewComponent extends Component<Props> {
  constructor(props){
    super(props);
    this.webview = null;
  }
  componentDidMount(){
    this.webviewScript = new InjectedScript(this.webview);
  }

  render() {
    return (
      <View style={styles.container}>
        <WebView
          ref={(obj)=> this.webview=obj}
          originWhitelist={['*']}
          userAgent={this.props.userAgent}
          style={[ styles.webviewContainer]}
          scrollEnabled={false}
          //scalesPageToFit={true}
          onMessage={this.props._onMessage}
          //injectedJavaScript={this.state.injectedScript}
          //injectJavaScript={this.state.injectedScript}
          javaScriptEnabled={true}
          domStorageEnabled={true}
          source={{ uri: this.props.url }}
          renderError={this.props._renderError}
          onLoadEnd={this.props._onLoadEnd}
          onLoadStart={this.props._onLoadStart}
          onNavigationStateChange={this.props._onNavigationStateChange}
          useWebKit={true}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    width : '100%', height : '100%'
  },
  webviewContainer : {
    width: '100%', flex : 1
  },
});
