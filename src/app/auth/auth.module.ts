import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './login/login.component';
import { SignUpComponent } from './sign-up/sign-up.component';
import { SharedUiModule } from '../shared/shared-ui.module';
import { ReactiveFormsModule } from '@angular/forms';
import { provideRouter, Routes } from '@angular/router';

const routes: Routes = [
  { path: 'sign-up', component: SignUpComponent },
  { path: 'login', component: LoginComponent },
];

@NgModule({
  declarations: [LoginComponent, SignUpComponent],
  imports: [CommonModule, SharedUiModule, ReactiveFormsModule],
  providers: [provideRouter(routes)],
})
export class AuthModule {}
