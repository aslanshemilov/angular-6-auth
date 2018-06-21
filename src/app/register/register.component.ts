import { Component, OnInit } from '@angular/core';
import { FormControl, FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  newUserForm: FormGroup;

  constructor(private fb: FormBuilder) {
    this.createRegisterForm();
  }

  ngOnInit() {
  }

  onSubmit() {
    console.log(this.newUserForm.value);
  }

  createRegisterForm() {
    this.newUserForm = this.fb.group({
      name: '',
      email: '',
      password: '',
      password_confirmation: ''
    });
  }

}
