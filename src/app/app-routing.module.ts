import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  
  {
    path: 'tabs',
    children: [
      
      {
        path: 'account',
        loadChildren: () => import('./home/home.module').then(m => m.HomePageModule),
      },
      {
        path: 'accounts/:userName',
        loadChildren: () => import('./account/account.module').then(m => m.AccountPageModule),
      },
      {
        path: 'overview',
        loadChildren: () => import('./overview/overview.module').then(m => m.OverviewPageModule),
      },
      {
        path: 'favourites',
        loadChildren: () => import('./favourites/favourites.module').then(m => m.FavouritesPageModule),
      },
    
    ],
  },
  {
    path: '',
    loadChildren: () => import('./home/home.module').then(m => m.HomePageModule),
    
  },
  {
    path: 'stats',
    loadChildren: () => import('./stats/stats.module').then( m => m.StatsPageModule)
  },
  {
    path: 'details/:id',
    loadChildren: () => import('./details/details.module').then( m => m.DetailsPageModule)
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
