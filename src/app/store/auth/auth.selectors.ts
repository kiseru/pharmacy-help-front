import { createSelector } from '@ngrx/store';
import { State } from '@app/store/state';

export const selectAuthState = (state: State) => state && state.auth;

export const selectAuthCurrentUser = createSelector(selectAuthState, state => state.currentUser);

export const selectAuthError = createSelector(selectAuthState, state => state.error);

export const selectAuthIsLoading = createSelector(selectAuthState, state => state.isLoading);
