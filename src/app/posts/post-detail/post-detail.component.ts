import { PostService } from './../post.service';
import { Component, OnInit } from '@angular/core';
import { Post } from '../post';

@Component({
  selector: 'app-post-detail',
  templateUrl: './post-detail.component.html',
  styleUrls: ['./post-detail.component.css']
})
export class PostDetailComponent implements OnInit {

  public post: Post;
  constructor(private postService: PostService) { }

  ngOnInit(): void {
    this.postService.getPostByID(1).subscribe(post => {
      console.log(post);
      this.post = post;
    });
  }

  savePost() {
    this.postService.createPost(this.post).subscribe(res => {
      console.log(res);

    });
  }
}
