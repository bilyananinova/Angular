import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/user/user.service';

@Component({
  selector: 'app-theme-page',
  templateUrl: './theme-page.component.html',
  styleUrls: ['./theme-page.component.css']
})
export class ThemePageComponent implements OnInit {

  constructor(public userService: UserService) { }

  ngOnInit(): void {
  }

}
