import React, { Component } from 'react';
import { StyleSheet, View, Text, Dimensions, BackHandler,Alert } from 'react-native';
import { connect } from 'react-redux';
import WebViewComponent from '../components/webview';
import DeviceInfo from 'react-native-device-info';
import envConfig from '../env';
import {changeAppRoot} from '../actions';

var { width, height } = Dimensions.get('window');
type Props = {};
class WebView extends Component<Props> {

  constructor(props) {
    super(props);

    this.state = {
      userAgent: DeviceInfo.getUserAgent(),
      url: envConfig.WEBVIEW.url
    }
    this.WebViewComponent = null;
  }

  _onMessage = () => {
  }
  _renderError = () => {
  }
  _onLoadEnd = () => {
  }
  _onLoadStart = () => {
  }
  _onNavigationStateChange = () => {
  }

  WebViewAlert = () => {
    const { webviewScript, webview } = this.WebViewComponent;
    webviewScript.alert("test");
  }

  componentDidMount() {
    this.WebViewAlert = this.WebViewAlert.bind(this);
    BackHandler.addEventListener('hardwareBackPress', this.handleBackPress.bind(this));
  }

  componentWillUnmount() {
    BackHandler.removeEventListener('hardwareBackPress', this.handleBackPress);
  }

  handleBackPress = (state) => {
    const { url } = this.state;
    const { webviewScript, webview } = this.WebViewComponent;

    let isExitApp = true;
    var self = this;

    if (url === envConfig.WEBVIEW.url) isExitApp = false;
    if (isExitApp) webview.goBack();
    if (!isExitApp) {
      Alert.alert(
        '앱을 종료 하시겠습니까?',
        '',
        [
          {
            text: '취소',
            onPress: () => console.log('취소'),
            style: 'cancel',
          },
          { text: '확인', onPress: () => { self.props.changeAppRoot(null); BackHandler.exitApp(); } }
        ],
        { cancelable: false },
      );

    }
    return true;
  }

  render() {
    return (
      <View style={styles.container}>
        <WebViewComponent
          ref={(obj)=> this.WebViewComponent = obj}
          url={this.state.url}
          userAgent={this.state.userAgent}
          _onLoadStart={this._onLoadStart.bind(this)}
          _onLoadEnd={this._onLoadEnd.bind(this)}
          _renderError={this._renderError.bind(this)}
          _onNavigationStateChange={this._onNavigationStateChange.bind(this)}
          _onMessage={this._onMessage.bind(this)}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center', alignItems: 'center', flex: 1, height: '100%',
    width: width
  }
});

const mapStateToProps = (state) => {
  return {
  }
}

const mapDispatchToProps = {
  changeAppRoot
}

export default connect(mapStateToProps, mapDispatchToProps)(WebView);