import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AsideComponent } from './aside/aside.component';
import { AsideItemComponent } from './aside-item/aside-item.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { ThemeComponent } from './theme/theme.component';
import { ThemeItemComponent } from './theme-item/theme-item.component';

@NgModule({
  declarations: [
    AppComponent,
    AsideComponent,
    AsideItemComponent,
    HeaderComponent,
    FooterComponent,
    ThemeComponent,
    ThemeItemComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent, HeaderComponent, FooterComponent]
})
export class AppModule { }
