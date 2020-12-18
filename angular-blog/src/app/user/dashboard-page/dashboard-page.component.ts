import { Component, OnInit } from '@angular/core';
import {Observable} from 'rxjs';
import {Post} from '../../shared/interfaces';
import {PostsUserService} from '../shared/services/post-user.service';

@Component({
  selector: 'app-dashboard-page',
  templateUrl: './dashboard-page.component.html',
  styleUrls: ['./dashboard-page.component.scss']
})
export class DashboardPageComponent implements OnInit {

  posts$: Observable<Post[]>;

  constructor(private postsService: PostsUserService) { }

  ngOnInit(): void {
    this.posts$ = this.postsService.getAllByUserId();
  }

}
