import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { WishlistViewComponent } from './wishlist-view.component';

const routes: Routes = [
  {
    path: '',
    component: WishlistViewComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class WishlistViewRoutingModule { }
