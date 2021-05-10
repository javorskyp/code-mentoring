
import { AuthAction, AuthState } from "./types";

export default (state: AuthState, action: AuthAction) => {
  switch (action.type) {
    case 'USER_LOADED':
    case 'REGISTER_SUCCESS':
    case 'LOGIN_SUCCESS':
      console.log("user loaded");
      return {
        ...state,
        isAuthenticated: true,
        loading: false,
        user: action.payload,
        error: null
      };
    case 'REGISTER_FAIL':
    case 'AUTH_ERROR':
    case 'LOGIN_FAIL':
      console.log("user reset");
      return {
        ...state,
        isAuthenticated: false,
        loading: false,
        error: action.payload,
        user: null
      };
    case 'LOGOUT':
      return {
        ...state,
        isAuthenticated: false,
        loading: false,
        error: null,
        user: null
      };
    case 'LOGOUT_FAIL':
      return {
        ...state
      };
    default:
      return state;
  }
};

