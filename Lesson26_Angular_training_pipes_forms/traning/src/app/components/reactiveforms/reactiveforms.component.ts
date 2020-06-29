import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-reactiveforms',
  templateUrl: './reactiveforms.component.html',
  styleUrls: ['./reactiveforms.component.css']
})
export class ReactiveformsComponent implements OnInit {
  // userform = new FormGroup({
  //   login: new FormControl('', Validators.required),
  //   password: new FormControl('', Validators.required),
  //   massage: new FormControl('')
  // })
  get login() {
    return this.userform.get('login');
  }
  get password() {
    return this.userform.get('password')
  }

  constructor(private fb: FormBuilder) { }

  ngOnInit(): void {
  }
  userform = this.fb.group({
    login: ['', [Validators.required, Validators.email]],
    password: ['', [Validators.required, Validators.minLength(5)]],
    massage: ['']
  })
}
