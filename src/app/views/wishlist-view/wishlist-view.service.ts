import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Observable } from 'rxjs';
import { catchError } from 'rxjs/operators';

import { ApiErrorHandlerService } from 'src/app/core/services/api-error-handler.service';


@Injectable()
export class WishlistViewService {
  constructor(
    private http: HttpClient,
    private apiErrorHandlerService: ApiErrorHandlerService
  ) { }

  public getImageAsBlob(url: string): Observable<Blob> {
    return this.http
      .get(url, {
        responseType: 'blob'
      })
      .pipe(catchError(this.apiErrorHandlerService.handleError));
  }
}
