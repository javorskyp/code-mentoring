import React, { useReducer, createContext, Reducer, FunctionComponent } from "react";
import authReducer from "./authReducer";
import axios from "axios";
import { AuthAction, AuthState, BasicAuthData, AuthContextProps } from "./types";

export const AuthContext = createContext({} as AuthContextProps);

const AuthProvider: FunctionComponent = ({ children }) => {

  const [authState, dispatch] = useReducer<Reducer<AuthState, AuthAction>>(authReducer, {} as AuthState);
  const axiosRequestConfig = {
    headers: {
      "Content-Type": "application/json"
    }
  };
  const register = async (registerData: BasicAuthData) => {
    try {
      const res = await axios.post("/users/signup", registerData, axiosRequestConfig);
      dispatch({ type: 'REGISTER_SUCCESS', payload: res.data });
    } catch (error) {
      dispatch({ type: 'REGISTER_FAIL', payload: error.response.data.error });
    }
  };

  const login = async (loginData: BasicAuthData) => {
    try {
      const res = await axios.post("/users/login", loginData, axiosRequestConfig);
      dispatch({ type: 'LOGIN_SUCCESS', payload: res.data });
    } catch (error) {
      dispatch({ type: 'LOGIN_FAIL', payload: error.response.data.error });
    }
  };

  const loadUser = async () => {
    try {
      const res = await axios.get("/users/me");
      dispatch({ type: 'USER_LOADED', payload: res.data });
    } catch (error) {
      dispatch({ type: 'AUTH_ERROR', payload: error });
    }
  };

  const logOut = async () => {
    try {
      await axios.get("/users/logout");
      dispatch({ type: 'LOGOUT', payload: null });
    } catch (error) {
      dispatch({ type: 'LOGOUT_FAIL', payload: null });
    }
  };

  return (
    <AuthContext.Provider
      value={{
        isAuthenticated: authState.isAuthenticated,
        loading: authState.loading,
        user: authState.user,
        error: authState.error,
        loadUser,
        logOut,
        register,
        login
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};
export default AuthProvider;
