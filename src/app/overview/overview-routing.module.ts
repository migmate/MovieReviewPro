import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { OverviewPage } from './overview.page';

const routes: Routes = [
  {
    path: '',
    component: OverviewPage,
    // children: [
    //   {
    //     path: 'tab1',
    //     loadChildren: () => import('../overview/overview.module').then(m => m.OverviewPageModule)
    //   },
    //   {
    //     path: 'tab2',
    //     loadChildren: () => import('../favourites/favourites.module').then(m => m.FavouritesPageModule)
    //   },
    //   {
    //     path: 'tab3',
    //     loadChildren: () => import('../account/account.module').then(m => m.AccountPageModule)
    //   }
    // ]
  }
];


@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class OverviewPageRoutingModule {}
