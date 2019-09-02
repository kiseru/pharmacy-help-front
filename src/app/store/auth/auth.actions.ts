import { createAction, props } from '@ngrx/store';
import { LoginForm } from '@app/core/entities/login-form';
import { User } from '@app/core/entities/user';

export const login = createAction('[Auth] Login', props<{ loginForm: LoginForm }>());
export const loginFail = createAction('[Auth] Login Fail', props<{ error: any }>());
export const me = createAction('[Auth] Me');
export const meFail = createAction('[Auth] Me Fail', props<{ error: any }>());
export const meSuccess = createAction('[Auth] Me Success', props<{ currentUser: User }>());
