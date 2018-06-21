import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

class UserLoginDataModel {
  email: string;
  password: string;
}

export class AuthUserData {
  user: {
    id: number;
    name: string;
    email: string;
    notifications?: Array<any>;
    created_at?: string;
    updated_at?: string;
    username: string;
  };
  access_token: string;
}

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  isAuthenticated = false;
  authUser: AuthUserData;

  constructor(private http: HttpClient, private router: Router) { }

  loginUser(userData: UserLoginDataModel) {
    return this.http.post('https://v-forum-api.bahdcasts.com/api/login', userData);
  }

  persistAuth(userData: AuthUserData) {
    localStorage.setItem('auth', JSON.stringify(userData));
  }

  checkAuth() {
    const authUser = JSON.parse(localStorage.getItem('auth'));
    if (authUser) {
      this.isAuthenticated = true;
      this.authUser = authUser;
    }
  }

  logoutUser() {
    this.isAuthenticated = false;
    this.authUser = null;

    localStorage.removeItem('auth');


    this.router.navigateByUrl('/');
  }
}
