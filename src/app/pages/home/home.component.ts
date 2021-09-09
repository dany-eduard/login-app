import { Component, OnInit } from '@angular/core';
import { BlogsResponse } from 'src/app/models/user.interface';
import { BlogsService } from 'src/app/services/blogs.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {
  user = window.localStorage.getItem('user');
  blogs: BlogsResponse[] = [];
  loader: boolean;

  constructor(private blogsServices: BlogsService) {
    this.loader = true;
  }

  async ngOnInit(): Promise<void> {
    this.blogs = await this.blogsServices.getAll();
    this.loader = false;
  }
}
