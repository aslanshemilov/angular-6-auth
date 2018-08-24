import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  url = 'https://v-forum-api.bahdcasts.com/api';
  isAuthenticated = false;
  authUser = null;

  constructor(
    private http: HttpClient,
    private router: Router
  ) { }

  loginUser(userDetails: { email: string, password: string }) {
    return this.http.post(`${this.url}/login`, userDetails);
  }

  persistAuth(data) {
    this.authUser = data;
    this.isAuthenticated = true;
    localStorage.setItem('auth', JSON.stringify(data));
  }

  checkAuth() {
    const authUser = localStorage.getItem('auth');

    if (authUser) {
      this.authUser = JSON.parse(authUser);
      this.isAuthenticated = true;
    }
  }

  logout() {
    this.isAuthenticated = false;
    this.authUser = null;

    localStorage.removeItem('auth');

    this.router.navigateByUrl('/');
  }
}
