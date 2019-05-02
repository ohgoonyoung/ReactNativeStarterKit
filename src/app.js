import React, { Component } from 'react';
import {
  Platform,
  AppRegistry, Alert
} from 'react-native';
import { Provider } from "react-redux";
import { persistStore as persistStoreRaw } from 'redux-persist';
import { Navigation } from 'react-native-navigation';
import * as appActions from "./actions";
import { registerScreens, goToLaunch, goToSetup } from './navigation';
import store from './modules/store';

import Menu from './menu.js';

global.Menu = Menu;
registerScreens(store);

Navigation.setDefaultOptions({
  topBar: {
    visible: false,
    drawBehind: true,
  }
});

let setInitialLayout = 'rnsk.Setup'
export default class App extends Component {

  constructor(props) {
    super(props);

    //store.subscribe(this.onStoreUpdate.bind(this));
    store.dispatch(appActions.appInitialized(setInitialLayout));

    this.navigationListener = Navigation.events().registerAppLaunchedListener(() => {
      this.onStoreUpdate();
    });

    // Subscribe
    const screenEventListener = Navigation.events().registerComponentDidAppearListener(({ componentId, componentName }) => {
      store.dispatch(appActions.appInitialized(componentName));
    });
  }

  onStoreUpdate() {
    let { root } = store.getState().root;

    // handle a root change
    // if your app doesn't change roots in runtime, you can remove onStoreUpdate() altogether
    if (this.currentRoot != root) {
      this.currentRoot = root;
      //goToHomeScreen();
      goToSetup();
      //startApp(root);
    }
  }

  componentDidMount() {
    this.navigationEventListener = Navigation.events().bindComponent(this);
  }

  componentWillUnmount() {
    // Not mandatory
    if (this.navigationListener) {
      this.navigationListener.remove();
    }
  }
}
