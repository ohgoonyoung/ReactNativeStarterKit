/** @format */

import {AppRegistry} from 'react-native';
import App from './App';
import {name as appName} from './app.json';
import { Navigation } from 'react-native-navigation';

//AppRegistry.registerComponent(appName, () => App);

Navigation.registerComponent('app', ()=> App);

Navigation.startSingleScreenApp({
    screen:{
        screen: 'app',
        title: 'app',
        navigatorStyle: {
            navBarHidden: false,
        },
        navigatorButton :  {}
    }
});