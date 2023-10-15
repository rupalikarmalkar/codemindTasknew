import { Component } from '@angular/core';
import { FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css']
})
export class PostComponent {
  name: string = "Rupali";

  like: number = 0;
  Dislike: number = 0;

  urls = [];

  constructor(private fB: FormBuilder) { }
  ngOnInIt() {

  }
  public likeCounter() {
    this.like++;

  }

  public DislikeCounter() {
    this.Dislike++;

  }
  onselect(e: any) {
    if (e.target.files) {
      for (let i = 0; i < File.length; i++) {
        var reader = new FileReader();
        reader.readAsDataURL(e.target.files[i])
        reader.onload = (events: any) => {
          this.urls.push(events.target.result as never);
        }

      }
    }
  }
}

