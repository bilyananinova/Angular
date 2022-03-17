import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from "rxjs";
import { IPost } from "../shared/interfaces/post";

@Injectable()
export class PostService {

  constructor(private http: HttpClient) { }

  getLastPosts(): Observable<IPost[]> {
    return this.http.get<IPost[]>('http://localhost:3000/api/posts?limit=5');
  }
}
