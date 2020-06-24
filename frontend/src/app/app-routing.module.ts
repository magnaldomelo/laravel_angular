import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { SignupComponent } from './components/signup/signup.component';
import { ProfileComponent } from './components/profile/profile.component';
import { RequrestResetComponent } from './components/password/requrest-reset/requrest-reset.component';
import { BeforeLoginService } from './Services/before-login.service';


const routes: Routes = [
  {path: 'login', component: LoginComponent, canActivate: [BeforeLoginService]},
  {path: 'signup', component: SignupComponent, canActivate: [BeforeLoginService]},
  {path: 'profile', component: ProfileComponent},
  {path: 'request-password-reset', component: RequrestResetComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
