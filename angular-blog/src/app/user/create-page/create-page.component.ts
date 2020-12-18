import {Component, ElementRef, OnInit, ViewChild} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {Post} from '../../shared/interfaces';
import {ActivatedRoute} from '@angular/router';
import {PostsUserService} from '../shared/services/post-user.service';

@Component({
  selector: 'app-create-page',
  templateUrl: './create-page.component.html',
  styleUrls: ['./create-page.component.scss']
})
export class CreatePageComponent implements OnInit {

  @ViewChild('input') inputRef: ElementRef;
  form: FormGroup;
  image: File;
  imagePreview: string | ArrayBuffer = '';
  post: Post;


  constructor(private roure: ActivatedRoute,
              private formBuilder: FormBuilder,
              private postService: PostsUserService) {
  }

  ngOnInit(): void {
    this.form = this.formBuilder.group({
      title: [null, [Validators.required]],
      text: [null, Validators.required]
    });
  }

  onSubmit() {
    let obs$;
    this.form.disable();
    obs$ = this.postService.create(this.form.value, this.image);
    console.log(this.form.value);
    obs$.subscribe(
      post => {this.form.enable();
               this.post = post;
      },
      error => {this.form.enable();
                console.log(error.error.message);
      }
    );
  }

  triggerClick() {
    this.inputRef.nativeElement.click();
  }

  onFileUpload(event: any) {
    const file = event.target.files[0];
    this.image = file;
    const reader = new FileReader();
    reader.onload = () => {
      this.imagePreview = reader.result;
    };
    reader.readAsDataURL(file);
  }
}
