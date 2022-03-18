import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { ThemeRoutingModule } from './themes-routing.module';

import { AsideComponent } from './aside/aside.component';
import { AsideItemComponent } from './aside-item/aside-item.component';
import { ThemeComponent } from './theme/theme.component';
import { ThemeItemComponent } from './theme-item/theme-item.component';
import { ThemeContentComponent } from './theme-content/theme-content.component';
import { NewThemeComponent } from './new-theme/new-theme.component';
import { ThemePageComponent } from './theme-page/theme-page.component';

import { PostService } from './post.service';
import { ThemeService } from './theme.service';
import { SharedModule } from '../shared/shared.module';


@NgModule({
  declarations: [
    AsideComponent,
    AsideItemComponent,
    ThemeComponent,
    ThemeItemComponent,
    ThemeContentComponent,
    NewThemeComponent,
    ThemePageComponent
  ],
  imports: [
    CommonModule,
    ThemeRoutingModule,
    SharedModule
  ],
  providers: [ThemeService, PostService]
})
export class ThemesModule { }
