

import { createFeatureSelector, createSelector } from '@ngrx/store';

import { FavoritesCollectionState } from '../state/favorites-details.state';

export const FAVORITES_ACTION_STATE_NAME = 'favorites';


export const FavoritesState = createFeatureSelector<FavoritesCollectionState>(
  FAVORITES_ACTION_STATE_NAME,
);


export const getFavoritesList = createSelector(FavoritesState, state => {
  return state;
});

export const getErrorMessage = createSelector(FavoritesState, state => {
  return state.errorMessage;
});
