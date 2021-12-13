import { favoritesListReducer } from 'src/app/shared/components/collection/store/reducer/favorites-collection.reducers';
import { FavoritesCollectionState } from 'src/app/shared/components/collection/store/state/favorites-details.state';


export interface Appstate {
  favorites: FavoritesCollectionState
}

export const appReducer = {
  favorites: favoritesListReducer
}
