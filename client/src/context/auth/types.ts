export interface AuthState {
    isAuthenticated: boolean;
    loading: boolean;
    error: any;
    user: any;
}

export interface AuthContextProps {
    isAuthenticated: boolean;
    loading: boolean;
    user: any;
    error: any;
    loadUser: Function;
    logOut: Function;
    register: ({ email, password }: BasicAuthData) => void;
    login: ({ email, password }: BasicAuthData) => void;
}

export interface AuthAction {
    type: 'SET_ALERT' | 'REMOVE_ALERT' | 'REGISTER_SUCCESS' | 'REGISTER_FAIL' | 'USER_LOADED' | 'AUTH_ERROR' | 'LOGIN_SUCCESS' | 'LOGIN_FAIL' | 'LOGOUT' | 'LOGOUT_FAIL' | 'CLEAR_ERRORS';
    payload: boolean | any;
}

export type BasicAuthData = {
    email: string;
    password: string;
}