export enum E_API_ROUTES {
  IMAGE_SEARCH = 'search/photos',
}
export const BASE_PATH = 'https://api.unsplash.com/';
export const CLIENT_ID= '8e31e45f4a0e8959d456ba2914723451b8262337f75bcea2e04ae535491df16d';
export const getApiPath = (path: E_API_ROUTES) => BASE_PATH + path;
