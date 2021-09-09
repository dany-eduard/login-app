import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { apiV1 } from 'src/environments/environment';
import { headers } from '../helpers/headers';

@Injectable({
  providedIn: 'root',
})
export class BlogsService {
  constructor(private http: HttpClient) {}
  getAll(): Promise<any> {
    return new Promise((resolve, reject) => {
      this.http.get(apiV1.blogs, headers()).subscribe(
        (data) => {
          resolve(data);
        },
        (err) => {
          reject(err);
        }
      );
    });
  }
}
