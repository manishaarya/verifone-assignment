import { Component, OnInit, OnDestroy } from '@angular/core';
import { Store } from '@ngrx/store';
import { Subscription } from 'rxjs';
import { FavoritesCollectionState } from 'src/app/shared/components/collection/store/state/favorites-details.state';
import { getFavoritesList } from 'src/app/shared/components/collection/store/selector/favorites-collection.selectors';
import { WishlistViewService } from './wishlist-view.service';
import { downLoadFile } from 'src/app/shared/utils/download';
import { ErrorConfig } from 'src/app/shared/components/error-message/error-message.model';

@Component({
  selector: 'app-wishlist-view',
  templateUrl: './wishlist-view.component.html',
  styleUrls: ['./wishlist-view.component.scss']
})
export class WishlistViewComponent implements OnInit, OnDestroy {

  public wishList: FavoritesCollectionState | null = null;
  public errorConfig: ErrorConfig | null = null;
  private subscriptions = new Subscription();
  constructor(private store: Store<FavoritesCollectionState>, private wishlistViewService: WishlistViewService) { }

  ngOnInit(): void {

    this.subscriptions.add(this.store.select(getFavoritesList).subscribe((data) => {
      this.wishList = data;
      if (data && Object.keys(data).length === 0) {
        this.errorConfig = { message: 'No Wishlist Item. Please create Wishlist.', type: 'info' };
      }
    }));

  }
  download(url: string) {
    this.subscriptions.add(this.wishlistViewService
      .getImageAsBlob(url)
      .subscribe(blob => {
        downLoadFile(blob, 'img-file')
      }));
  }

  ngOnDestroy(): void {
    this.subscriptions.unsubscribe();
  }
}
