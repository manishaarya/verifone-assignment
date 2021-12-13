import { Component, OnInit, Input, OnChanges, SimpleChanges, Output, EventEmitter } from '@angular/core';
import { Store } from '@ngrx/store';

import { FavoritesCollectionState } from 'src/app/shared/components/collection/store/state/favorites-details.state';
import { editProperty } from 'src/app/shared/components/collection/store/action/favorites-collection.actions';
import { IWishList } from 'src/app/shared/components/collection/model/wishlist-collection.model';

@Component({
  selector: 'app-wishlist-catalog',
  templateUrl: './wishlist-catalog.component.html',
  styleUrls: ['./wishlist-catalog.component.scss']
})
export class WishlistCatalogComponent implements OnInit, OnChanges {

  @Input() wishList: FavoritesCollectionState | null = null;
  @Output() download = new EventEmitter();
  public showEditTitleContainer = false;
  public showEditDescriptionContainer = false;
  public editInfo = { title: '', description: '' }
  public wishlistCollectionList: IWishList[] | null = null;
  constructor(private store: Store<FavoritesCollectionState>) { }

  ngOnInit(): void {
    if (this.wishList) {
      this.wishlistCollectionList =JSON.parse(JSON.stringify(Object.values(this.wishList)));
    }
  }

  ngOnChanges(changes: SimpleChanges) {
    if (changes && changes.wishList && changes.wishList.currentValue) {
      this.wishlistCollectionList = JSON.parse(JSON.stringify(Object.values(changes.wishList.currentValue)));
    }
  }

  toggleContainer(field: string, show: boolean, val?: string, item?: IWishList) {
    if (item) {
      item['isEdit']= {}
      item['isEdit'][field] = show;
    }
    switch (field) {
      case 'title':
        this.showEditTitleContainer = show;
        if (val) {
          this.editInfo.title = val;
        }
        break;

      case 'description':
        this.showEditDescriptionContainer = show;
        if (val) {
          this.editInfo.description = val;
        }
        break;
    }
  }

  editData(keyName: string, value: string, id: string,) {
    if (value) {
      this.store.dispatch(editProperty({ keyName, value, id }));
    }
    this.toggleContainer(keyName, false);
  }

  downLoadImage(url: string) {
    this.download.emit(url);
  }
}
