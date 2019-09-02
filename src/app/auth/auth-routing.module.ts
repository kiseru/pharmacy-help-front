import { NgModule } from '@angular/core';
import { LoginPageComponent } from './login-page/login-page.component';
import { RouterModule, Routes } from '@angular/router';
import { GuestGuard } from '@app/core/guards/guest.guard';

const routes: Routes = [
  { path: 'login', component: LoginPageComponent, canActivate: [] }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AuthRoutingModule {
}
