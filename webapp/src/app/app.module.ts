import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ToastrModule } from 'ngx-toastr';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppComponent } from './app.component';
import { NavComponent } from './nav/nav.component';
import { AuthorizationComponent } from './authorization/authorization.component';
import { HttpClientModule } from '@angular/common/http';
import { AuthorizationCallbackComponent } from './authorization-callback/authorization-callback.component';

const appRoutes: Routes = [
  { path: 'callback', component: AuthorizationCallbackComponent },
  { path: '**', component: AuthorizationComponent }
];

@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    AuthorizationComponent,
    AuthorizationCallbackComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forRoot(
      appRoutes,
      { enableTracing: true } // <-- debugging purposes only
    ),
    BrowserAnimationsModule,
    ToastrModule.forRoot({
      timeOut: 10000,
      positionClass: 'toast-bottom-right',
      preventDuplicates: true,
    })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
