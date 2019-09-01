import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { LoginForm } from '../entities/login-form';
import { BehaviorSubject, Observable } from 'rxjs';
import { User } from '../entities/user';
import { Token } from '../entities/token';
import { switchMap, tap } from 'rxjs/operators';
import { CookieService } from 'ngx-cookie-service';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private userSubject = new BehaviorSubject<User>(null);
  user = this.userSubject.asObservable();

  constructor(private cookieService: CookieService,
              private http: HttpClient) {
  }

  login(loginForm: LoginForm): void {
    this.http.post<Token>('login/', loginForm)
      .pipe(tap(token => this.cookieService.set('auth_token', token.token)))
      .pipe(switchMap(() => this.me()))
      .subscribe(user => this.userSubject.next(user));
  }

  me(): Observable<User> {
    const options = new HttpHeaders({
      Authorization: `Token ${this.cookieService.get('auth_token')}`
    });
    return this.http.get<User>('users/me/', { headers: options });
  }
}
