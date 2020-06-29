import { Component, OnInit } from '@angular/core';
import { PostService } from '../../services/post.service';
import { IPost } from '../../interfaces/post';
import { FormGroup, FormControl, Validators } from '@angular/forms';
@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css']
})
export class PostComponent implements OnInit {
  [x: string]: any;
  allPost: IPost[] = [];
  postForm = new FormGroup({
    title: new FormControl('', Validators.required),
    body: new FormControl('', Validators.required)
  });
  editPostForm = new FormGroup({
    title: new FormControl('', Validators.required),
    body: new FormControl('', Validators.required)
  });

  msg: string;
  style: string;
  success: boolean = false;
  showEditForm: boolean = false;
  idEditPost: number = 1;
  constructor(private data: PostService) { }
  addPost() {
    let post = this.postForm.value;
    this.data.createPost(post).subscribe((res: IPost) => {
      this.allPost.push(res);
      this.postForm.patchValue({
        title: '',
        body: ''
      });
      this.showMessage('post added', 'success');
    })
  }
  deletePost(id) {
    this.data.deletePost(id).subscribe(_ => {
      this.allPost = this.allPost.filter((t) => t.id !== id);
      this.showMessage('post deleted', 'danger');
    });
  }
  editPost() {
    let post = this.editPostForm.value;
    this.data.updatePost(post, this.idEditPost).subscribe((res: IPost) => {
      this.postForm.patchValue({ title: '', body: '' });
      this.showMessage('post edited', 'success');
      this.allPost.forEach((obj: IPost) => {
        if (obj.id == this.idEditPost) { obj.title = res.title; obj.body = res.body; }
      });
      this.showEditForm = false;
    });
  }
  showMessage(text, style) {
    this.msg = text;
    this.success = true;
    this.style = style; setTimeout(_ => {
      this.success = false;
    }, 2000);
  }
  toggleEditPost(post: IPost) {
    this.showEditForm = true;
    this.idEditPost = post.id;
    this.editPostForm.patchValue({ title: post.title, body: post.body });
  }
  ngOnInit(): void {
    // this.data.getPost().subscribe((posts: IPost[]) => {
    //   this.allPost = posts;
    // })
  }

}
