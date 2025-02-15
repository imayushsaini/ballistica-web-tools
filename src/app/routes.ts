import {Routes} from '@angular/router';

export const MATERIAL_DOCS_ROUTES: Routes = [
  {
    path: '',
    pathMatch: 'full',
    loadChildren: () => import('./pages/homepage').then(m => m.HomepageModule)
  },
  {
    path:'account',
    pathMatch: 'full',
    loadChildren: ()=> import('./pages/account/account').then(m =>m.AccountModule)
  },
  {
    path:'auth',
    pathMatch: 'prefix',
    loadChildren: ()=> import('./pages/auth/auth').then(m =>m.AuthModule)
  },
  {
    path:'tools',
    pathMatch:'full',
    loadChildren: ()=> import('./pages/dashboard/dashboard').then(m=>m.DashboardModule)
  },
  {
    path:'tools/workspace',
    pathMatch:'prefix',
    loadChildren: ()=> import('./pages/workspace/workspace').then(m=>m.WorkspaceModule)
  },
  {
    path: '404',
    loadChildren: () => import('./pages/not-found').then(m => m.NotFoundModule)
  },
  {path: 'wiki', redirectTo: 'https://github.com/efroemling/ballistica'},

  {path: '**', redirectTo: '/404'},
];
