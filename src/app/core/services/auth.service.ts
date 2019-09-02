import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { LoginForm } from '../entities/login-form';
import { BehaviorSubject, Observable } from 'rxjs';
import { User } from '../entities/user';
import { Token } from '../entities/token';
import { CookieService } from 'ngx-cookie-service';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private readonly AUTH_TOKEN = 'auth_token';

  private userSubject = new BehaviorSubject<User>(null);
  user = this.userSubject.asObservable();

  constructor(private cookieService: CookieService,
              private http: HttpClient) {
  }

  login(loginForm: LoginForm): Observable<Token> {
    return this.http.post<Token>('login/', loginForm);
  }

  me(): Observable<User> {
    const options = new HttpHeaders({
      Authorization: `Token ${this.cookieService.get(this.AUTH_TOKEN)}`
    });
    return this.http.get<User>('users/me/', { headers: options });
  }

  isAuthenticated(): boolean {
    return this.cookieService.check(this.AUTH_TOKEN);
  }

  setAuthToken(token: string): void {
    this.cookieService.set(this.AUTH_TOKEN, token);
  }
}
