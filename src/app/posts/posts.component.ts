import { PostService } from './post.service';
import { Component, OnInit } from '@angular/core';
import { Post } from './post';

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.css']
})
export class PostsComponent implements OnInit {

  public posts: Post[];
  constructor(private postService: PostService) { }

  ngOnInit(): void {
    this.posts = [];

    this.postService.getAllPosts().subscribe(posts => {
      console.log(posts);
      this.posts = posts;
    });

  }

}
