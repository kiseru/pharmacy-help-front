import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StoreModule } from '@ngrx/store';
import { reducer } from '@app/store/auth/auth.reducer';
import { EffectsModule } from '@ngrx/effects';
import { AuthEffects } from '@app/store/auth/auth.effects';

@NgModule({
  imports: [
    CommonModule,
    StoreModule.forFeature('auth', reducer),
    EffectsModule.forFeature([AuthEffects])
  ]
})
export class AuthModule {
}
