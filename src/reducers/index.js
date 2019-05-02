
import { combineReducers } from 'redux';
import { root } from './rootReducer';

const initialAuthState = {
  isLoggedIn: false,
};

function auth(state = initialAuthState, action) {
  switch (action.type) {
    case 'LOGIN_COMPLETED':
      return { ...state, isLoggedIn: true };
    case 'LOGIN_ERROR':
      return { ...state, isLoggedIn: false };
    default:
      return state;
  }
}

export default combineReducers({
  root,
  auth,
});