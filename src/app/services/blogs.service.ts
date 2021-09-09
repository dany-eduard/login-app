import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { apiV1 } from 'src/environments/environment';
import { headers } from '../helpers/headers';
import { BlogsResponse } from '../models/user.interface';

@Injectable({
  providedIn: 'root',
})
export class BlogsService {
  constructor(private http: HttpClient) {}
  getAll(): Promise<BlogsResponse[]> {
    return new Promise((resolve, reject) => {
      this.http.get(apiV1.blogs, headers()).subscribe(
        (data: any) => {
          resolve(data);
        },
        (err) => {
          reject(err);
        }
      );
    });
  }
}
