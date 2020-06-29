import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms';
@Component({
  selector: 'app-homework-forms',
  templateUrl: './homework-forms.component.html',
  styleUrls: ['./homework-forms.component.css']
})
export class HomeworkFormsComponent implements OnInit {
  loginFormData = { username: '', password: '' };
  formsToggle = true;
  constructor(private fb: FormBuilder) { }

  ngOnInit(): void {
  }
  registerFormData = this.fb.group({
    username: ['', [Validators.required]],
    fullname: ['', [Validators.required]],
    email: ['', [Validators.required, Validators.email]],
    password: ['', [Validators.required]],
    confirmpassword: ['', [Validators.required]]
  });
  get password() {
    return this.registerFormData.get("password")
  }
  get confirmpassword() {
    return this.registerFormData.get("confirmpassword")
  }
  showLoginForm() {
    this.formsToggle = true;
  }
  showRegisterForm() {
    this.formsToggle = false;
  }
}
