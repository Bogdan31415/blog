import {Component, Input, OnInit} from '@angular/core';
import {BlogComment} from '../../interfaces';

@Component({
  selector: 'app-comment',
  templateUrl: './comment.component.html',
  styleUrls: ['./comment.component.scss']
})
export class CommentComponent implements OnInit {
  @Input() comment: BlogComment;

  constructor() { }

  ngOnInit(): void {
  }

}
