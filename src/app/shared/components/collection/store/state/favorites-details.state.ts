import { ImageResponse } from 'src/app/views/dashboard-view/dashboard-view.model';
import { IWishList } from 'src/app/shared/components/collection/model/wishlist-collection.model';

export interface FavoritesCollectionState {
  [key: string]: IWishList;
}

export const initialState: FavoritesCollectionState = {
};

export interface IExistingCollectionState {
  imageDetails: ImageResponse;
  collectionId: string;
}

export interface IEditCollection {
  keyName: string,
  value: string,
  id:string,
}
