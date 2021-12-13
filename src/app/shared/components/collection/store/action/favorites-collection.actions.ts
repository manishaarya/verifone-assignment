import { createAction, props } from '@ngrx/store';
import { IExistingCollectionState, IEditCollection } from '../state/favorites-details.state';
import { IWishList } from 'src/app/shared/components//collection/model/wishlist-collection.model';
export const FETCH_FAVORITES_LIST = '[ImageResponse] Fetch Favorites List';
export const ADD_FAVORITES_LIST = '[ImageResponse] Add Favorites';
export const ADD_TO_EXISTING_LIST = '[ImageResponse] Add To Existing Favorites List';
export const EDIT_PROPERTY = '[ImageResponse] Edit Title Or Description';
export const DUMMY_ACTION = '[ImageResponse] Dummy Action';


export const addFavoritesList = createAction(
  ADD_FAVORITES_LIST,
  props<IWishList>()
);

export const editProperty = createAction(
  EDIT_PROPERTY,
  props<IEditCollection>()
);

export const addToExistingList = createAction(
  ADD_TO_EXISTING_LIST,
  props<IExistingCollectionState>()
);
export const fetchFavoritesList = createAction(
  FETCH_FAVORITES_LIST
);

export const dummyAction = createAction(DUMMY_ACTION);
