import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { apiV1 } from 'src/environments/environment';
import {
  LoginResponse,
  User,
  UserRgister,
} from 'src/app/models/user.interface';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  constructor(private http: HttpClient, private router: Router) {}

  login(user: User): Promise<LoginResponse> {
    return new Promise((resolve, reject) => {
      this.http.post(apiV1.login, user).subscribe(
        (data: any) => {
          resolve(data);
        },
        (error) => {
          reject(error);
        }
      );
    });
  }

  register(user: UserRgister): Promise<string> {
    return new Promise((resolve, reject) => {
      this.http.post(apiV1.register, user).subscribe(
        (data: any) => {
          resolve(data);
        },
        (error) => {
          reject(error);
        }
      );
    });
  }

  logout() {
    localStorage.removeItem('token');
    localStorage.removeItem('user');
    this.router.navigateByUrl('/login');
  }
}
