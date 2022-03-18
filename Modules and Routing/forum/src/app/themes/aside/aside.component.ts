import { Component, OnInit } from '@angular/core';
import { IPost } from '../../shared/interfaces/post';
import { PostService } from '../post.service';

@Component({
  selector: 'app-aside',
  templateUrl: './aside.component.html',
  styleUrls: ['./aside.component.css']
})
export class AsideComponent implements OnInit {

  posts: IPost[] = [];

  constructor(public postService: PostService) { }

  ngOnInit(): void {
    this.postService.getLastPosts().subscribe(p => {
      this.posts = p;
    })
  }

}
