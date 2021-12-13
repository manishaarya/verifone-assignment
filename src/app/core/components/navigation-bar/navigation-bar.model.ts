export interface INavigationBar {
  id: string;
  displayName: string;
  link: string;
}

export const subNavMenu: INavigationBar[] = [{
  id: 'dashboard',
  displayName: 'Dashboard',
  link: '/dashboard',
},
{
  id: 'wishlist',
  displayName: 'Wishlist',
  link: '/wishlist',
}];
