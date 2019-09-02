import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import * as authActions from '@app/store/auth/auth.actions';
import { catchError, exhaustMap, map, tap } from 'rxjs/operators';
import { AuthService } from '@app/core/services/auth.service';
import { of } from 'rxjs';

@Injectable()
export class AuthEffects {
  constructor(private actions$: Actions,
              private authService: AuthService) {
  }

  login$ = createEffect(() => this.actions$
    .pipe(ofType(authActions.login))
    .pipe(exhaustMap(action => this.authService.login(action.loginForm)
      .pipe(tap(token => this.authService.setAuthToken(token.token)))
      .pipe(map(() => authActions.me()))
      .pipe(catchError(error => of(authActions.loginFail({ error })))))));

  me$ = createEffect(() => this.actions$
    .pipe(ofType(authActions.me))
    .pipe(exhaustMap(() => this.authService.me()
      .pipe(map(currentUser => authActions.meSuccess({ currentUser })))
      .pipe(catchError(error => of(authActions.meFail({ error })))))));
}
