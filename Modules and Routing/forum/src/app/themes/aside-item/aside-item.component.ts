import { Component, Input } from '@angular/core';
import { IPost } from '../../shared/interfaces/post';

@Component({
  selector: 'app-aside-item',
  templateUrl: './aside-item.component.html',
  styleUrls: ['./aside-item.component.css']
})
export class AsideItemComponent {
  @Input() post!: IPost;

  constructor() { }
}