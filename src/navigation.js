import { registerScreen, registerScreenWithRedux, setRoot, _push } from './modules/navigation'
import store from './modules/store';

import Menu from './menu';

import Launch from './screens/Launch';
import Tutorial from './screens/Tutorial';
import Setup from './screens/Setup';

export const registerScreens = (store) => {
  registerScreen('rnsk.Launch', Launch);
  registerScreen('rnsk.Tutorial', Tutorial);

  registerScreenWithRedux('rnsk.Setup', Setup, store);
}

export const push = (componentId, componentName, props = {}, title = "", subTitle = "") => {
  switch (componentName) {
    case 'Regist':
      _push(componentId, {
        component: {
          name: 'rnsk.tabs.Regist',
          passProps: {
            passProps: props
          },
          options: {
            topBar: {
              title: {
                text: title
              }

            }
          }
        }
      });
      break;

    case 'ProfileDetail':
      _push(componentId, {
        component: {
          name: 'rnsk.tabs.ProfileDetail',
          passProps: {
            passProps: props
          },
          options: {
            topBar: {
              title: {
                text: title,
                fontSize: 13,
                color: 'white',
                fontFamily: 'Helvetica',
                alignment: 'center'
              },
              subtitle: {
                text: subTitle,
                fontSize: 11,
                color: 'white',
                fontFamily: 'Helvetica',
                alignment: 'center'
              }
            }
          }
        }
      });
      break;
    case 'ReviewImageViewer':
      _push(componentId, {
        component: {
          name: 'rnsk.tabs.ReviewImageViewer',
          passProps: {
            passProps: props
          },
          options: {
            topBar: {
              title: {
                text: title,
                fontSize: 13,
                color: 'white',
                fontFamily: 'Helvetica',
                alignment: 'center'
              }
            }
          }
        }
      });
      break;

    default:

  }

}

export const goToSetup = () =>
  setRoot('stack', 'rnsk.Setup', [
    {
      component: {
        name: 'rnsk.Setup',
      },
    },
  ])

export const goToLaunch = () =>
  setRoot('stack', 'rnsk.Launch', [
    {
      component: {
        name: 'rnsk.Launch',
      },
    },
  ])

export const goToTutorial = () =>
  setRoot('stack', 'rnsk.Tutorial', [
    {
      component: {
        name: 'rnsk.Tutorial',
      },
    },
  ])

  /*
export const goToHome = () => {
  setRoot('bottomTabs', 'bottomtabsId', Menu.nav.bottoms);
}
*/
