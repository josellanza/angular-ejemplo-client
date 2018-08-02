import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { AuthService } from './services/auth.service';
import { HttpClientModule } from '@angular/common/http';


import { AppComponent } from './app.component';
import { SignupPageComponent } from './pages/signup-page/signup-page.component';
import { ProfilePageComponent } from './pages/profile-page/profile-page.component';
import { LoginPageComponent } from './pages/login-page/login-page.component';
import { RequireNonGuardService } from './guards/require-non-guard.service';
import { RequireUserGuardGuard } from './guards/require-user-guard.guard';

const routes: Routes = [
  { path: 'signup', component: SignupPageComponent, canActivate: [RequireNonGuardService] },
  { path: 'login', component: LoginPageComponent, canActivate: [RequireNonGuardService] },
  { path: 'profile', component: ProfilePageComponent, canActivate: [RequireUserGuardGuard] }
 ];

@NgModule({
  declarations: [
    AppComponent,
    SignupPageComponent,
    ProfilePageComponent,
    LoginPageComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes),
    FormsModule,
    HttpClientModule
  ],
  providers: [
    AuthService,
    RequireNonGuardService,
    RequireUserGuardGuard
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
