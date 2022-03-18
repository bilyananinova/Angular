import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ITheme } from '../shared/interfaces/theme';
import { ThemeService } from '../theme/theme.service';

@Component({
  selector: 'app-theme-content',
  templateUrl: './theme-content.component.html',
  styleUrls: ['./theme-content.component.css']
})
export class ThemeContentComponent implements OnInit {

  @Input() theme!: ITheme;

  constructor(private themeService: ThemeService, private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.themeService.getTheme(this.route.snapshot.params['id']).subscribe(t => {
      this.theme = t;
        console.log(typeof this.theme.posts);
        
    })
  }

}
