import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Post} from '../../../shared/interfaces';

@Injectable({providedIn: 'root'})
export class PostsUserService {
  private post: string;
  constructor(private http: HttpClient) {}

  create(post: Post, image?: File): Observable<Post>{
    const fd = new FormData();
    if (image){
      fd.append('image', image, image.name);
    }
    fd.append('title', post.title);
    fd.append('text', post.text);
    return this.http.post<Post>('/api/post/', fd);
  }
  getAllByUserId(): Observable<Post[]> {
    return this.http.post<Post[]>('/api/post/user/', this.post = 'post)))');
  }
  remove(id: string): Observable<void> {
    return this.http.delete<void>(`/api/post/${id}`);
  }

  update(post: Post): Observable<Post> {
    return this.http.patch<Post>('/api/auth/register', post);
  }
}
