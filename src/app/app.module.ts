import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';
import { AuthModule } from './auth/auth.module';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { ApiHostInterceptorService } from './core/http-interceptors/api-host-interceptor.service';
import { StoreModule } from '@app/store/store.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    AppRoutingModule,
    AuthModule,
    BrowserModule,
    BrowserAnimationsModule,
    StoreModule
  ],
  providers: [
    { provide: HTTP_INTERCEPTORS, useClass: ApiHostInterceptorService, multi: true }
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}
