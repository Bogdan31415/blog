import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Post} from '../interfaces';
import {map} from 'rxjs/operators';

@Injectable({providedIn: 'root'})
export class PostsService {
  constructor(private http: HttpClient) {}
  getAll(): Observable<Post[]> {
    return this.http.get('api/post/')
      .pipe(map((response: {[key: string]: any}) => {
        return Object
          .keys(response)
          .map(key => ({
            ...response[key],
            id: key,
          }));
      }));
  }

  getById(id: string): Observable<Post> {
    return this.http.get<Post>(`/api/post/${id}`)
      .pipe(map((post: Post) => {
        return {
          ...post, id,
        };
      }));
  }
}
