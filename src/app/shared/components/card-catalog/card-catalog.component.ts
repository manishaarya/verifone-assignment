import {
  Component, Input, OnInit, OnChanges,
  SimpleChanges
} from '@angular/core';
import {
  ImageSearchResponse, ImageResponse
} from 'src/app/views/dashboard-view/dashboard-view.model';

@Component({
  selector: 'app-card-catalog',
  templateUrl: './card-catalog.component.html',
  styleUrls: ['./card-catalog.component.scss']
})
export class CardCatalogComponent implements OnInit, OnChanges {

  @Input() resultSet: ImageSearchResponse | null = null;

  public imageData: ImageResponse[] = [];
  public isShowModal = false;
  public favoritesImageData: ImageResponse | null = null;

  constructor() { }

  ngOnInit(): void {

    this.imageData = this.resultSet ? this.resultSet.results : [];
  }

  ngOnChanges(changes: SimpleChanges) {
    if (changes && changes.resultSet && changes.resultSet.currentValue) {
      this.imageData = [...changes.resultSet.currentValue.results];
    }
  }

  // opens the Modal on Click and sets the Data to be passed to the modal window
  public openModal(item: ImageResponse) {
    this.isShowModal = true;
    this.favoritesImageData = item;
  }

  //closes the Modal
  public closeModal() {
    this.isShowModal = false;
  }
}
