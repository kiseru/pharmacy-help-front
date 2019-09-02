import { LoginForm } from '@app/core/entities/login-form';
import { User } from '@app/core/entities/user';

export interface AuthState {
  currentUser: User;
  error: any;
  isLoading: boolean;
  loginForm: LoginForm;
}

export const initialState: AuthState = {
  currentUser: null,
  error: null,
  isLoading: false,
  loginForm: null
};
