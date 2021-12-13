import { Component, OnInit, Input, OnChanges, SimpleChanges, Output, EventEmitter, Inject } from '@angular/core';
import { Observable } from 'rxjs';

import { DOCUMENT } from '@angular/common';
import { Store } from '@ngrx/store';

import { getFavoritesList } from 'src/app/shared/components/collection/store/selector/favorites-collection.selectors';
import { addFavoritesList, addToExistingList } from 'src/app/shared/components/collection/store/action/favorites-collection.actions';
import { FavoritesCollectionState } from 'src/app/shared/components/collection/store/state/favorites-details.state';
import { IWishList } from 'src/app/shared/components/collection/model/wishlist-collection.model';
import {
  ImageResponse
} from 'src/app/views/dashboard-view/dashboard-view.model';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.scss']
})
export class ModalComponent implements OnInit, OnChanges {
  @Input() showModal = false;
  @Output() close = new EventEmitter();
  @Input() favoritesImageData: ImageResponse | null = null;

  public favoritesList$: Observable<FavoritesCollectionState> | null = null;

  constructor(@Inject(DOCUMENT) private _document: any, private store: Store<FavoritesCollectionState>) {
  }

  ngOnInit(): void {
    this.favoritesList$ = this.store.select(getFavoritesList);
  }

  ngOnChanges(changes: SimpleChanges) {
    if (changes && changes.showModal && changes.showModal.currentValue) {
      this.open();
    } else {
      this.cancel();
    }
  }

  // this method prevents scrolling of the background when the modal is opened
  open() {
    this.stopScrolling();
  }

  // this method resumes scroling and closes the modal on click
  cancel() {
    this.close.emit();
    this.resumeScrolling();
  }

  // Method that removes the scrolling class from the body element
  stopScrolling(): void {
    this._document.body.classList.add('no-scrolling');
  }

  // this method add the scrolling class on the body tag
  resumeScrolling(): void {
    if (this._document.body.classList.contains('no-scrolling')) {
      this._document.body.classList.remove('no-scrolling');
    }
  }

  //When create collection is clicked : we need to add the card details in a particular wishlist Id
  addCollection(val: IWishList) {
    const item = { ...val };
    item['imageList'] = item['imageList'] && item['imageList'].length > 0 ? [...item['imageList']] : [];
    if (this.favoritesImageData) {
      item['imageList'].push(this.favoritesImageData);
    }
    this.store.dispatch(addFavoritesList(item));
  }

  // This method add the images to the existing wishlist Object
  addToExistingList(key: string) {
    if (this.favoritesImageData) {
      const item = { imageDetails: { ...this.favoritesImageData }, collectionId: key }
      this.store.dispatch(addToExistingList(item));
    }
  }
}
