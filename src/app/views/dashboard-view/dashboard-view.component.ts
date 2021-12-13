import { Component, OnInit } from '@angular/core';
import {
  E_API_ROUTES,
  getApiPath,
  CLIENT_ID
} from 'src/app/shared/model/api.model';

import {
  ImageSearchResponse,
} from './dashboard-view.model';
import { DashboardViewService } from './dashboard-view.service';
import { ErrorConfig } from 'src/app/shared/components/error-message/error-message.model';

@Component({
  selector: 'app-dashboard-view',
  templateUrl: './dashboard-view.component.html',
  styleUrls: ['./dashboard-view.component.scss']
})
export class DashboardViewComponent implements OnInit {

  public resultSet: ImageSearchResponse | null = null;

  public showLoader = false;

  public errorConfig: ErrorConfig | null = null;

  constructor(private dashboardViewService: DashboardViewService) { }

  ngOnInit(): void {
  }

  fetchDataList(query: string) {
    this.showLoader = true;
    this.errorConfig = null;
    const loadImageSearchUrl = `${getApiPath(E_API_ROUTES.IMAGE_SEARCH)}?query=${query}&client_id=${CLIENT_ID}`;
    this.dashboardViewService.getImages(loadImageSearchUrl).subscribe(
      (data: ImageSearchResponse) => {
        this.showLoader = false;
        if (data && data.results.length === 0 && query) {
          this.errorConfig = { message: 'No Data Found', type: 'info' };
        }
        this.resultSet = data;
      },
      (err) => {
        this.showLoader = false;
        this.errorConfig = { message: 'Error Loading Profile Details', type: 'danger' };
      }
    );
  }

}
