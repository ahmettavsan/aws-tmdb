import { Component, inject } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { FormConfig } from 'src/app/models/app-model';
import { LoadingService } from 'src/app/shared/loading.service';
import { AuthService } from '../data-access/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent {
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
      key: 'gender',
      type: 'text',
      title: 'Gender',
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
    gender: new FormControl(),
    email: new FormControl(),
  });

  protected loginService = inject(AuthService);

  print() {
    if (this.form.invalid) return;
    const { username, password } = this.form.value;
    this.loginService.login(username, password).subscribe((response) => {
      console.log(response);
    });
  }
}
