import { Component, Input } from '@angular/core';
import { ITheme } from '../shared/interfaces/theme';

@Component({
  selector: 'app-theme-item',
  templateUrl: './theme-item.component.html',
  styleUrls: ['./theme-item.component.css']
})
export class ThemeItemComponent{

  @Input() theme!: ITheme;

  constructor() { }
}
