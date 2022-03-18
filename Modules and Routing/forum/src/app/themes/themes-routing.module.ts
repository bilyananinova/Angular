import { RouterModule, Routes } from '@angular/router';
import { NewThemeComponent } from './new-theme/new-theme.component';
import { ThemeContentComponent } from './theme-content/theme-content.component';
import { ThemePageComponent } from './theme-page/theme-page.component';

const routes: Routes = [
    {
        path: 'themes',
        component: ThemePageComponent,
      },
      {
        path: 'themes/:id',
        component: ThemeContentComponent,
      },
      {
        path: 'new-theme',
        component: NewThemeComponent,
      },
];

export const ThemeRoutingModule = RouterModule.forChild(routes)
