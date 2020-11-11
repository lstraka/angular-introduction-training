import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Post } from './post';

@Injectable({
  providedIn: 'root'
})
export class PostService {

  private url = 'https://jsonplaceholder.typicode.com/';

  constructor(private http: HttpClient) { }

  public getAllPosts(): Observable<Post[]> {
    return this.http.get<Post[]>(this.url + 'posts');
  }

  public getPostByID(id: number): Observable<Post> {
    return this.http.get<Post>(this.url + 'posts/' + id);
  }

  public createPost(post: Post): Observable<any> {
    return this.http.post<any>(this.url + 'posts', post);
  }
}
