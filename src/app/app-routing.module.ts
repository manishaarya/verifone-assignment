import { NgModule } from '@angular/core';
import { NoPreloading, RouterModule, Routes } from '@angular/router';

import { E_ROUTES } from 'src/app/shared/constants/routes';

const routes: Routes = [
  {
    path: '',
    redirectTo: `/${E_ROUTES.DASHBOARD}`,
    pathMatch: 'full',
  },
  {
    path: `${E_ROUTES.DASHBOARD}`,
    loadChildren: () =>
      import('./views/dashboard-view/dashboard-view.module').then(
        (m) => m.DashboardViewModule
      ),
  },
  {
    path: `${E_ROUTES.WISHLIST}`,
    loadChildren: () =>
      import('./views/wishlist-view/wishlist-view.module').then(
        (m) => m.WishlistViewModule
      ),
  },
  { path: '**', redirectTo: `/${E_ROUTES.DASHBOARD}` }
]

@NgModule({
  imports: [
    RouterModule.forRoot(routes, {
      preloadingStrategy: NoPreloading,
      relativeLinkResolution: 'legacy',
    }),
  ],
  exports: [RouterModule],
})
export class AppRoutingModule { }
