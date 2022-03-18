import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ThemeRoutingModule } from './themes-routing.module';
import { ThemeService } from './theme.service';
import { RouterModule } from '@angular/router';
import { AsideComponent } from './aside/aside.component';
import { AsideItemComponent } from './aside-item/aside-item.component';
import { ThemeComponent } from './theme/theme.component';
import { ThemeItemComponent } from './theme-item/theme-item.component';
import { ThemeContentComponent } from './theme-content/theme-content.component';
import { NewThemeComponent } from './new-theme/new-theme.component';
import { PostService } from './post.service';


@NgModule({
  declarations: [
    AsideComponent,
    AsideItemComponent,
    ThemeComponent,
    ThemeItemComponent,
    ThemeContentComponent,
    NewThemeComponent    
  ],
  imports: [
    CommonModule,
    RouterModule,
    ThemeRoutingModule
  ],
  providers: [ThemeService, PostService]
})
export class ThemesModule { }
