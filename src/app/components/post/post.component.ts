import { Component, OnInit } from '@angular/core';
import { PostService } from './post.service';
import { IPost } from './IPost';

@Component({
  selector: 'b-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.scss']
})
export class PostComponent implements OnInit {
  posts: IPost[];
  loading: boolean = false;
  constructor(private postService: PostService) { }

  ngOnInit() {
    this.loading = true;
    this.postService.getPosts().subscribe(post => { this.posts = post },
      (error) => console.log(error),
      () => { console.log('sucessfully loaded !'), this.loading = false; })
  }

}
