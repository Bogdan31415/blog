import {NgModule} from '@angular/core';
import {HttpClientModule} from '@angular/common/http';
import {MatIconModule} from '@angular/material/icon';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatButtonModule} from '@angular/material/button';
import {CommentComponent} from './components/comment/comment.component';
import {MatCardModule} from '@angular/material/card';
import {PostComponent} from './components/post/post.component';
import {RouterModule} from '@angular/router';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';


@NgModule({
  imports: [
    HttpClientModule,
    MatIconModule,
    MatToolbarModule,
    MatButtonModule,
    MatCardModule,
    MatFormFieldModule,
    MatInputModule,
    RouterModule
  ],
  exports: [
    HttpClientModule,
    MatIconModule,
    MatToolbarModule,
    MatButtonModule,
    MatFormFieldModule,
    MatInputModule,
    MatCardModule,
    CommentComponent,
    PostComponent
  ],
  declarations: [CommentComponent, PostComponent]
})
export class SharedModule {

}
