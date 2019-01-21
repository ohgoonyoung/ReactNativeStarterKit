import App from '../../App';

//screens
import login from './login';
import launch from './launch';

//push
import items from './items';
import itemDetail from './items/itemDetail';

//overlays
import overlay from './overlay';

//tabs
import home from './tabs/home';
import mypage from './tabs/mypage';
import nativebaseFooter from './tabs/nativebaseFooter';



import { Navigation } from "react-native-navigation";

// React Native Navigation v2
export default () => {
    Navigation.registerComponent(`navigation.WelcomeScreen`, () => App);
    Navigation.registerComponent(`navigation.login`, () => login);
    Navigation.registerComponent(`navigation.launch`, () => launch);

    //push
    Navigation.registerComponent(`navigation.push.items`, () => items);
    Navigation.registerComponent(`navigation.push.itemDetail`, () => itemDetail);

    //overlay
    Navigation.registerComponent(`navigation.overlay`, () => overlay);

    //tabs
    Navigation.registerComponent(`navigation.tabs.home`, () => home);
    Navigation.registerComponent(`navigation.tabs.mypage`, () => mypage);
    Navigation.registerComponent(`navigation.tabs.nativebaseFooter`, () => nativebaseFooter);
}

export const startApp = (root) => { 

    switch(root){
        case 'WelcomeScreen':
            Navigation.setRoot({
                root: {
                    component: {
                        name: "navigation.WelcomeScreen"
                    },
                }
            });
            return;
        case 'launch':
            Navigation.setRoot({
                root: {
                    component: {
                        name: "navigation.launch"
                    },
        
                }
            });
            return;
        case 'login':
            Navigation.setRoot({
                root: {
                    component: {
                        name: "navigation.login"
                    },
        
                }
            });
            return;
        case 'home':

            Navigation.setRoot({
                root: {
                bottomTabs: {
                    children: [{
                        stack: {
                            children: [{
                                component: {
                                    name: 'navigation.tabs.home',
                                    passProps: {
                                    text: 'This is home tab'
                                    }
                                }
                            }],
                            options: {
                            bottomTab: {
                                text: 'home',
                                //icon: require('../images/one.png'),
                                testID: 'FIRST_TAB_BAR_BUTTON'
                            }
                            }
                        }
                    },
                    {
                        component: {
                            name: 'navigation.tabs.mypage',
                            passProps: {
                            text: 'This is mypage tab'
                            },
                            options: {
                            bottomTab: {
                                text: 'mypage',
                                //icon: require('../images/two.png'),
                                testID: 'SECOND_TAB_BAR_BUTTON'
                            }
                            }
                        }
                    },
                    {
                        component: {
                            name: 'navigation.tabs.nativebaseFooter',
                            passProps: {
                            text: 'This is nativebaseFooter tab'
                            },
                            options: {
                            bottomTab: {
                                text: 'nativebaseFooter',
                                //icon: require('../images/two.png'),
                                testID: 'SECOND_TAB_BAR_BUTTON'
                            }
                            }
                        }
                    }
                ]
                }
                }
            });
            return;
        default :
            return;
    }
    
}


export const push = (componentId, nextComponent) => {
    console.log(componentId, nextComponent);
    switch(componentId){
        case 'items' :
        console.log('items!!!');
            Navigation.push(componentId, {
                stack:{
                    component: {
                        name: 'navigation.push.items',
                        options: {
                            statusBarStyle: 'light', largeTitle: true,
                            statusBar: { visible: true }, largeTitle: { visible: true }.visible,
                            topBar: {
                                visible: true,
                                title: {
                                  text: 'items screen title'
                                }
                            }
                        }
                    }
                }
                
            });
            return;

        default :
        
            return;
    }
}

export const showOverlay = (componentId) => {
    switch(componentId){
        case 'overlay' :
            Navigation.showOverlay({
                component: {
                    name: 'navigation.overlay',
                    options: {
                        overlay: {
                            interceptTouchOutside: true
                        },
                        topBar: {
                            title: {
                              text: 'overlay screen title'
                            }
                        }
                    }
                }
            });
            return;

        default :
        
            return;
    }
}