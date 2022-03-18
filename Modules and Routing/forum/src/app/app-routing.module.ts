import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { NewThemeComponent } from './new-theme/new-theme.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { ThemeComponent } from './theme/theme.component';
import { ThemeContentComponent } from './theme-content/theme-content.component';

const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    component: HomeComponent,
  },
  {
    path: 'themes',
    component: ThemeComponent,
  },
  {
    path: 'themes/:id',
    component: ThemeContentComponent,
  },
  {
    path: 'new-theme',
    component: NewThemeComponent,
  },
  {
    path: '**',
    component: NotFoundComponent,
  }
];

export const AppRoutingModule = RouterModule.forRoot(routes)
