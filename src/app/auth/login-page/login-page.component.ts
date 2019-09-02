import { Component, OnInit } from '@angular/core';
import { AuthService } from '@app/core/services/auth.service';
import { FormBuilder, FormGroup } from '@angular/forms';
import { select, Store } from '@ngrx/store';
import { State } from '@app/store/state';
import { login } from '@app/store/auth/auth.actions';
import { selectAuthCurrentUser } from '@app/store/auth/auth.selectors';

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.scss']
})
export class LoginPageComponent implements OnInit {

  form: FormGroup;

  constructor(private authService: AuthService,
              private fb: FormBuilder,
              private store: Store<State>) {
  }

  ngOnInit() {
    this.form = this.fb.group({
      email: [''],
      password: ['']
    });

    this.store.pipe(select(selectAuthCurrentUser))
      .subscribe(console.log);
  }

  submit(): void {
    this.store.dispatch(login({ loginForm: this.form.value }));
  }
}
