import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { WelcomeComponent } from './welcome/welcome.component';
import { AuthGuard } from './auth.guard';
import { RedirectIfAuthGuard } from './redirect-if-auth.guard';
import { HomeComponent } from './home/home.component';

const routes: Routes = [{
  path: 'login',
  component: LoginComponent,
  canActivate: [RedirectIfAuthGuard]
}, {
  path: 'register',
  component: RegisterComponent,
  canActivate: [RedirectIfAuthGuard]
}, {
  path: '',
  component: WelcomeComponent
}, {
  path: 'home',
  component: HomeComponent,
  canActivate: [AuthGuard]
}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
