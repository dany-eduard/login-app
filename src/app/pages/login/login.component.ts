import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  loginForm = new FormGroup({
    username: new FormControl(''),
    password: new FormControl(''),
  });
  constructor(private authService: AuthService, private router: Router) {}

  ngOnInit(): void {}

  async onLogin() {
    try {
      const res = await this.authService.login(this.loginForm.value);
      window.localStorage.setItem('token', res.token);
      window.localStorage.setItem('user', `${res.nameuser} ${res.surname}`);
      this.router.navigateByUrl('/');
    } catch (error: any) {
      Swal.fire({
        title: `${error.error.Message}`,
        text: 'Vefique sus credenciales',
        icon: 'error',
      });
    }
  }
}
