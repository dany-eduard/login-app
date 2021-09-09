import { Component, OnInit } from '@angular/core';
import { BlogsService } from 'src/app/services/blogs.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  user = window.localStorage.getItem('user');
  constructor(private blogsServices: BlogsService) { }

  async ngOnInit(): Promise<void> {
    const blogs = await this.blogsServices.getAll();
    console.log(blogs);
  }

}
