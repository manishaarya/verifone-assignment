import { Action, createReducer, on } from '@ngrx/store';
import * as FavoriteCollectionActions from '../action/favorites-collection.actions';
import { FavoritesCollectionState, IExistingCollectionState, IEditCollection } from '../state/favorites-details.state';
import { IWishList } from 'src/app/shared/components/collection/model/wishlist-collection.model';

export const initialState: FavoritesCollectionState = {
};

export const favoritesReducerHandler = createReducer(
  initialState,
  /*
  creates a new List and add the image to te ImageList array
  */
  on(FavoriteCollectionActions.addFavoritesList,
    (state: FavoritesCollectionState, favorites: IWishList) => {
      const stateObj = JSON.parse(JSON.stringify(state));
      if (stateObj[favorites.title] === undefined) {
        stateObj[favorites.title] = favorites;
      }
      return stateObj;
    }
  ),
  /*
  adds the image to the existing imageList array of a particular collection
  */
  on(FavoriteCollectionActions.addToExistingList,
    (state: FavoritesCollectionState, val: IExistingCollectionState) => {
      const stateObj = JSON.parse(JSON.stringify(state));
      if (stateObj[val.collectionId] !== undefined) {
        stateObj[val.collectionId]['imageList'].push(val.imageDetails)
      }
      return stateObj;
    }
  ),
  /*
  updates the properties of the object
  */
  on(FavoriteCollectionActions.editProperty,
    (state: FavoritesCollectionState, val: IEditCollection) => {
      const stateObj = JSON.parse(JSON.stringify(state));
      if(stateObj[val.id]!==undefined){
        stateObj[val.id][val.keyName] = val.value;
      }
      return stateObj;
    }
  ),
  on(FavoriteCollectionActions.fetchFavoritesList, (state: FavoritesCollectionState) => {
    return {...state};
  }),

  on(FavoriteCollectionActions.dummyAction, (state: FavoritesCollectionState) => {
    return {...state};
  })
);

export function favoritesListReducer(state: FavoritesCollectionState | undefined, action: Action): any {
  return favoritesReducerHandler(state, action);
}
