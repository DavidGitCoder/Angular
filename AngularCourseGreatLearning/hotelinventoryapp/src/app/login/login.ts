import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { JsonPipe } from '@angular/common';

@Component({
  selector: 'hinv-login',
  imports: [FormsModule, JsonPipe],
  templateUrl: './login.html',
  styleUrl: './login.scss',
})
export class Login {
  email: string = '';
  password: string = '';
  showPassword: boolean = false;
  Login() {
    if (this.email === 'admin@gmail.com' && this.password === 'Admin') {
      alert('Login successful');
    }
  }
  togglePassword() {
    this.showPassword = !this.showPassword;
  }
}
