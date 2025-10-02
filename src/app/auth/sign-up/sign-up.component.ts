import { Component } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { FormConfig } from 'src/app/models/app-model';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css'],
})
export class SignUpComponent {
  config: FormConfig[] = [
    {
      key: 'username',
      type: 'text',
      title: 'Username',
      required: true,
    },
    {
      key: 'password',
      type: 'password',
      title: 'Password',
      required: true,
    },
    {
      key: 'confirmPassword',
      type: 'password',
      title: 'Confirm Password',
      required: true,
    },
    {
      key: 'email',
      type: 'email',
      title: 'Email',
      required: true,
    },
  ];

  form: FormGroup = new FormGroup({
    username: new FormControl(''),
    password: new FormControl(),
    confirmPassword: new FormControl(),
    email: new FormControl(),
  });

  print() {
    console.log(this.form.value);
  }
}
