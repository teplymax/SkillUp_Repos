import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { IPost } from '../interfaces/post';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
const newapi = 'http://localhost:3000';
@Injectable()
export class PostService {

  constructor(private http: HttpClient) { }

  getPost() {
    // return this.http.get('https://jsonplaceholder.typicode.com/posts');
    return this.http.get(`${newapi}/posts`);
  }
  createPost(post) {
    return this.http.post(`${newapi}/posts`, post).pipe(catchError(this.handleError))
  }
  updatePost(post, id) {
    return this.http.put(`${newapi}/posts/${id}`, post).pipe(catchError(this.handleError));
  }
  deletePost(id: number) {
    return this.http.delete(`${newapi}/posts/${id}`).pipe(catchError(this.handleError));
  }
  private handleError(err) {
    console.log('caught mapping error and rethrowing', err); return throwError(err);
  }
}