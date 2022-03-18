import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './user/login/login.component';
import { NewThemeComponent } from './new-theme/new-theme.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { ProfileComponent } from './user/profile/profile.component';
import { RegisterComponent } from './user/register/register.component';
import { ThemeComponent } from './theme/theme.component';
import { ThemeContentComponent } from './theme-content/theme-content.component';

const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    component: HomeComponent,
  },
  {
    path: 'login',
    component: LoginComponent,
  },
  {
    path: 'register',
    component: RegisterComponent,
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
    path: 'profile',
    component: ProfileComponent,
  },
  {
    path: '**',
    component: NotFoundComponent,
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
