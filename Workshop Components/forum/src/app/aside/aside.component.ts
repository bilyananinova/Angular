import { Component, OnInit } from '@angular/core';
import { IPost } from '../interfaces/post';
import { PostsService } from '../posts.service';

@Component({
  selector: 'app-aside',
  templateUrl: './aside.component.html',
  styleUrls: ['./aside.component.css']
})
export class AsideComponent implements OnInit {

  postList: IPost[] = [];

  constructor(private postService: PostsService) { }

  ngOnInit(): void {
    this.postService.getLastPosts().subscribe(p => {
      this.postList = p;
      console.log(this.postList);
    })
  }
}
