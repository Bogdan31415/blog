import {Component, Input, OnInit} from '@angular/core';
import {Post} from '../../shared/interfaces';
import {PostsUserService} from '../shared/services/post-user.service';

@Component({
  selector: 'app-edit-page',
  templateUrl: './edit-page.component.html',
  styleUrls: ['./edit-page.component.scss']
})
export class EditPageComponent implements OnInit {
  @Input() post: Post;

  constructor(private postsService: PostsUserService) { }

  ngOnInit(): void {
  }

  onDelete(id: string) {
    this.postsService.remove(this.post._id);
  }
}
