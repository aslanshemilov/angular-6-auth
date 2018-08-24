import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  userLoginForm: FormGroup;
  constructor(
    private fb: FormBuilder,
    private auth: AuthService
  ) {
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
    this.auth.loginUser(this.userLoginForm.value).subscribe((response: any) => {
      this.auth.persistAuth(response.data);
    });
  }

}
