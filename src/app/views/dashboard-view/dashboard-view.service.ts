import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Observable } from 'rxjs';
import { catchError } from 'rxjs/operators';

import { ApiErrorHandlerService } from 'src/app/core/services/api-error-handler.service';

import { ImageSearchResponse } from './dashboard-view.model';

@Injectable()
export class DashboardViewService {
  constructor(
    private http: HttpClient,
    private apiErrorHandlerService: ApiErrorHandlerService
  ) {}

  public getImages(url:string): Observable<ImageSearchResponse> {
    return this.http
      .get<ImageSearchResponse>(url)
      .pipe(catchError(this.apiErrorHandlerService.handleError));
  }
}
