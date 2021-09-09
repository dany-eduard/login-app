import { Component, OnInit } from '@angular/core';
import { BlogsResponse } from 'src/app/models/user.interface';
import { BlogsService } from 'src/app/services/blogs.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {
  constructor(private blogsServices: BlogsService) {}
  user = window.localStorage.getItem('user');
  blogs: BlogsResponse[] = [];

  async ngOnInit(): Promise<void> {
    this.blogs = await this.blogsServices.getAll();
    console.log(this.blogs);
  }
}
