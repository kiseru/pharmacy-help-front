import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EffectsModule } from '@ngrx/effects';
import { StoreModule as NgRxStoreModule } from '@ngrx/store';
import { AuthModule } from '@app/store/auth/auth.module';

@NgModule({
  imports: [
    AuthModule,
    CommonModule,
    NgRxStoreModule.forRoot({}),
    EffectsModule.forRoot([])
  ]
})
export class StoreModule {
}
