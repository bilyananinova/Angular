import { Component, Input, OnInit } from '@angular/core';
import { IPost } from '../interfaces/post';

@Component({
  selector: 'app-aside-item',
  templateUrl: './aside-item.component.html',
  styleUrls: ['./aside-item.component.css']
})
export class AsideItemComponent implements OnInit {
  @Input() post!: IPost
  constructor() { }

  ngOnInit(): void {
  }

}
