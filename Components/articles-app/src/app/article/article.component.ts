import { Component, Input, OnInit } from '@angular/core';
import Article from '../models/article.model';

@Component({
  selector: 'app-article',
  templateUrl: './article.component.html',
  styleUrls: ['./article.component.css']
})
export class ArticleComponent implements OnInit {
  private symbols: number = 250;
  @Input() article!: Article;
  @Input() articleDesc: string = '';
  descToShow: string;
  articleDescLen: number;
  showReadMoreButton: boolean = true;
  showHideButton: boolean = false;
  imageIsShown: boolean = false;
  imageButtonTitle: string = 'Show Image';

  constructor() {
    this.articleDescLen = 0;
    this.descToShow = '';
  }

  readMore(): void {
    this.articleDescLen += this.symbols;

    if (this.articleDescLen >= this.articleDesc.length) {
      this.showHideButton = true;
      this.showReadMoreButton = false;
    } else {      
      this.descToShow = this.articleDesc.substring(0, this.articleDescLen);
    }
    
  }

  hideDesc(): void {
    this.descToShow = '';
    this.articleDescLen = 0;
    this.showReadMoreButton = true;
    this.showHideButton = false;
  }

  toggleImage(): void {
    this.imageIsShown = this.imageIsShown ? this.imageIsShown = false : this.imageIsShown = true;
    this.imageButtonTitle = this.imageButtonTitle == 'Show Image' ? 'Hide Image' : 'Show Image';
  }

  ngOnInit() {
  }

}
