import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {BlogComment} from '../interfaces';

@Injectable({
  providedIn: 'root'
})
export class CommentsService {
  commends: BlogComment [] = [];

  constructor(private http: HttpClient) {
  }

  fetch(postId: string): Observable<BlogComment[]>{
    return this.http.get<BlogComment[]>(`/api/comment/${postId}`);
  }
  create(comment: BlogComment): Observable<BlogComment>{
    return this.http.post<BlogComment>('/api/comment/', comment);
  }
}
