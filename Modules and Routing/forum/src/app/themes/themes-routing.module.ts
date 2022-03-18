import { RouterModule, Routes } from '@angular/router';
import { NewThemeComponent } from './new-theme/new-theme.component';
import { ThemeContentComponent } from './theme-content/theme-content.component';
import { ThemeComponent } from './theme/theme.component';

const routes: Routes = [
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
];

export const ThemeRoutingModule = RouterModule.forChild(routes)
