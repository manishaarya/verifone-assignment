import { Component, OnInit, Input, OnChanges, SimpleChanges, Output, EventEmitter } from '@angular/core';

import { IWishList, IWishListForm } from '../model/wishlist-collection.model';
import { ImageResponse } from 'src/app/views/dashboard-view/dashboard-view.model';
import { FavoritesCollectionState } from 'src/app/shared/components/collection/store/state/favorites-details.state';
@Component({
  selector: 'app-display-collection',
  templateUrl: './display-collection.component.html',
  styleUrls: ['./display-collection.component.scss']
})
export class DisplayCollectionComponent implements OnInit, OnChanges {

  @Input() favoritesList: FavoritesCollectionState | null = null;
  @Input() imageId: string | undefined = undefined;
  @Output() invokeMethod = new EventEmitter();

  public favoritesListData: IWishList[] | null = null;

  constructor() {

  }

  ngOnInit(): void {
  }

  ngOnChanges(changes: SimpleChanges) {
    if (changes && changes.favoritesList && changes.favoritesList.currentValue) {
      this.favoritesListData = Object.values(changes.favoritesList.currentValue);
    }
    if (changes && changes.imageId && changes.imageId.currentValue) {
      this.imageId = changes.imageId.currentValue;
    }
  }

  // based on this method we show add icons and already wishlisted icon
  public isChecked(arr: ImageResponse[] | undefined) {
    return arr && arr.length > 0 ? !arr.some((e: ImageResponse) => { return e.id === this.imageId; }) : true;
  }

  public addToCollection(id: string) {
    this.invokeMethod.emit(id);
  }
}
