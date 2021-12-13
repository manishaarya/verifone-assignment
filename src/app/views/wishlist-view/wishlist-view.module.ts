import { NgModule } from '@angular/core';
import { SharedModule } from 'src/app/shared/modules/shared.module';

import { WishlistViewRoutingModule } from './wishlist-view-routing.module';
import { WishlistViewComponent } from './wishlist-view.component';
import { WishlistCatalogComponent } from 'src/app/shared/components/wishlist-catalog/wishlist-catalog.component';
import { WishlistViewService } from './wishlist-view.service';

@NgModule({
  declarations: [WishlistCatalogComponent, WishlistViewComponent],
  imports: [
    SharedModule,
    WishlistViewRoutingModule
  ],
  providers: [WishlistViewService],
  exports: [WishlistCatalogComponent, WishlistViewComponent]
})
export class WishlistViewModule { }
