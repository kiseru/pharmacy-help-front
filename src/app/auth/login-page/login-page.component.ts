import { Component, OnInit } from '@angular/core';
import { AuthService } from '../core/services/auth.service';
import { FormBuilder, FormGroup } from '@angular/forms';
import { switchMap } from 'rxjs/operators';

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.scss']
})
export class LoginPageComponent implements OnInit {

  form: FormGroup;

  constructor(private authService: AuthService,
              private fb: FormBuilder) {
  }

  ngOnInit() {
    this.form = this.fb.group({
      email: [''],
      password: ['']
    });

    this.authService.user
      .pipe(switchMap())
      .subscribe(user => console.log(user));
  }

  submit(): void {
    this.authService.login(this.form.value);
  }
}
