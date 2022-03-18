import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { UserModule } from './user/user.module';

import { AppComponent } from './app.component';
import { AsideComponent } from './aside/aside.component';
import { AsideItemComponent } from './aside-item/aside-item.component';
import { HeaderComponent } from './core/header/header.component';
import { FooterComponent } from './core/footer/footer.component';
import { ThemeComponent } from './theme/theme.component';
import { ThemeItemComponent } from './theme-item/theme-item.component';
import { UserService } from './user/user.service';
import { ThemeService } from './theme/theme.service';
import { PostService } from './aside/post.service';
import { HomeComponent } from './home/home.component';
import { NewThemeComponent } from './new-theme/new-theme.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { ThemeContentComponent } from './theme-content/theme-content.component';

@NgModule({
  declarations: [
    AppComponent,
    AsideComponent,
    AsideItemComponent,
    HeaderComponent,
    FooterComponent,
    ThemeComponent,
    ThemeItemComponent,
    HomeComponent,
    NewThemeComponent,
    NotFoundComponent,
    ThemeContentComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    UserModule,
  ],
  providers: [UserService, ThemeService, PostService],
  bootstrap: [AppComponent, HeaderComponent, FooterComponent]
})
export class AppModule { }
