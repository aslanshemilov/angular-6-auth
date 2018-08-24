import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { WelcomeComponent } from './welcome/welcome.component';
import { HomeComponent } from './home/home.component';
import { AuthGuard } from './auth.guard';
import { RedirectIfAuthGuard } from './redirect-if-auth.guard';

const routes: Routes = [{
  path: 'login',
  component: LoginComponent,
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
