import { ImageResponse } from 'src/app/views/dashboard-view/dashboard-view.model';

export interface IWishList extends IWishListForm {

  id: string;
  imageList: ImageResponse[];
  isEdit?:{[key:string]:boolean};
}

export interface IWishListForm {
  title: string;
  description: string;
}
