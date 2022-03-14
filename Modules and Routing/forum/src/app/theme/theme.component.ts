import { Component, OnInit } from '@angular/core';
import { ITheme } from '../interfaces/theme';
import { ThemeService } from '../theme.service';

@Component({
  selector: 'app-theme',
  templateUrl: './theme.component.html',
  styleUrls: ['./theme.component.css']
})
export class ThemeComponent implements OnInit {

  themeList: ITheme[] = [];

  constructor(private themeService: ThemeService) { }

  ngOnInit(): void {
    this.themeService.getAll().subscribe(themes => {
      this.themeList = themes;
    });
  }
}
