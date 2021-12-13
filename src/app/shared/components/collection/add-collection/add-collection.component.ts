import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { IWishListForm, IWishList } from '../model/wishlist-collection.model';

@Component({
  selector: 'app-add-collection',
  templateUrl: './add-collection.component.html',
  styleUrls: ['./add-collection.component.scss']
})
export class AddCollectionComponent implements OnInit {
  @Output() invokeMethod = new EventEmitter();

  model: IWishListForm = { title: '', description: '' };
  isShowCollectionContainer = false;

  constructor() { }

  ngOnInit(): void {
  }

  // creates collection. After creation hides the container
  public createCollection() {
    this.resetForm();
    this.isShowCollectionContainer = true;
  }
// on Clicking cancel button clears the form and closes the container
  public closeCollectionContainer() {
    this.resetForm();
    this.isShowCollectionContainer = false;
  }
// submit method which creates the collection in the store in th form of object where key will will be title
  public onSubmit(formValue: IWishList) {
    this.invokeMethod.emit({ ...formValue, id: formValue.title, imageList: [] })
    this.isShowCollectionContainer = false;
  }

  // Reset all the form values
  public resetForm() {
    this.model = { title: '', description: '' };
  }
}
