import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { AuthService, AuthUserData } from '../auth.service';
import { Router } from '@angular/router';

interface IServerResponse {
  data: AuthUserData;
  success: string;
}

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  userLoginForm: FormGroup;
  constructor(private fb: FormBuilder, private authService: AuthService, private router: Router) {
    this.createLoginForm();
  }

  ngOnInit() {
  }

  createLoginForm() {
    this.userLoginForm = this.fb.group({
      email: '',
      password: ''
    });
  }

  onSubmit() {
    this.authService.loginUser(this.userLoginForm.value).subscribe((response: IServerResponse) => {
      this.authService.persistAuth(response.data);

      this.authService.checkAuth();

      this.router.navigateByUrl('/');
    });
  }

}
