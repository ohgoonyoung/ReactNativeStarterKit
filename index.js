/** @format */

import { Navigation } from "react-native-navigation";

import App from './App';
import {name as appName} from './app.json';

//import {AppRegistry} from 'react-native';
//AppRegistry.registerComponent(appName, () => App);

// React Native Navigation v2
import registerScreens, {startApp} from './src/screens';

registerScreens();
Navigation.events().registerAppLaunchedListener(() => {
    startApp('WelcomeScreen');
    /*
    Navigation.setRoot({
        root: {
            component: {
                name: "navigation.WelcomeScreen"
            },
        }
    });
    */
});