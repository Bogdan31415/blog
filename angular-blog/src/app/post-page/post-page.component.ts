import {Component, OnDestroy, OnInit} from '@angular/core';
import {Observable, Subscription} from 'rxjs';
import {BlogComment, Post} from '../shared/interfaces';
import {ActivatedRoute, Params} from '@angular/router';
import {PostsService} from '../shared/services/posts.service';
import {switchMap} from 'rxjs/operators';
import {CommentsService} from '../shared/services/comments.service';
import {FormControl, FormGroup, Validators} from '@angular/forms';

@Component({
  selector: 'app-post-page',
  templateUrl: './post-page.component.html',
  styleUrls: ['./post-page.component.scss']
})
export class PostPageComponent implements OnInit, OnDestroy {
  form: FormGroup;
  commants$: Observable<BlogComment[]>;
  post$: Observable<Post>;
  aSab: Subscription;
  id: string;
  constructor(
    private route: ActivatedRoute,
    private postsService: PostsService,
    private commentService: CommentsService
  ) {
    this.id = route.snapshot.params.id;
  }
  ngOnInit() {
    this.form = new FormGroup({
      text: new FormControl(null, Validators.required)});
    this.post$ = this.route.params
      .pipe(switchMap((params: Params) => {
        return this.postsService.getById(params.id);
      }));
    this.commants$ = this.route.params
      .pipe(switchMap((params: Params) => {
        return this.commentService.fetch(params.id);
      }));

  }
  submit() {
    this.form.disable();
    const blogComment: BlogComment = {
      text: this.form.value,
      post: this.id,
    };
    console.log(blogComment);
    this.aSab = this.commentService.create(blogComment).subscribe(
      () => {
        this.form.enable();
      },
      error => {
        console.assert(error.error.message);
        this.form.enable();
      }
    );
  }

  ngOnDestroy(): void {
    if (this.aSab) {
      this.aSab.unsubscribe();
    }
  }

}
