import { AuthState, initialState } from './auth.state';
import * as authActions from './auth.actions';
import { Action, createReducer, on } from '@ngrx/store';

const authReducer = createReducer(
  initialState,
  on(authActions.login, (state, { loginForm }) => ({
    ...state,
    error: initialState.error,
    isLoading: true,
    loginForm
  })),
  on(authActions.loginFail, (state, { error }) => ({
    ...state,
    error,
    isLoading: false,
    loginForm: initialState.loginForm
  })),
  on(authActions.me, state => ({ ...state, error: initialState.error, isLoading: true })),
  on(authActions.meFail, (state, { error }) => ({ ...state, error, isLoading: false })),
  on(authActions.meSuccess, (state, { currentUser }) => ({ ...state, currentUser, isLoading: false }))
);

export function reducer(state: AuthState, action: Action): AuthState {
  return authReducer(state, action);
}
