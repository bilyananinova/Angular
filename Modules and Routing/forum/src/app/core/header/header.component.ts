import { Component, OnInit } from '@angular/core';
import { UserService } from '../../user/user.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor(public userService: UserService) { }

  ngOnInit(): void {
    
  }
  
  loginHandler(): void {
    this.userService.login();
    console.log(this.userService.isLogged);
  }

  logoutHandler(): void {
    this.userService.logout();
  }

}