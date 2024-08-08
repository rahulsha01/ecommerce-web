import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor,
  HttpResponse,
  HttpErrorResponse
} from '@angular/common/http';
import { Observable , throwError} from 'rxjs';
import { catchError, map } from 'rxjs/operators';
import { environment } from '../../environments/environment';
import { Router } from '@angular/router';
import { MatSnackBar } from '@angular/material/snack-bar';


@Injectable({
  providedIn: 'root'
})
export class HttpInterceptorService implements HttpInterceptor {
  constructor(private router:Router,
    private _snackBar: MatSnackBar,) {}
  intercept(
    req: HttpRequest<any>,
    next: HttpHandler
  ): Observable<HttpEvent<any>> {
    let baseUrl = environment.apiUrl;
    let headers = req.headers;
    let isToken = sessionStorage.getItem('token');
    
     if (isToken) {
         headers = headers
        .set("Authorization", "Bearer "+ isToken);
    }
 
    let reqCloned = req.clone({
      url: baseUrl + req.url,
      headers: headers
    });
    return next.handle(reqCloned).pipe(
        catchError((error: HttpErrorResponse) => {
          let errorMessage = '';
          if (error.error instanceof ErrorEvent) {
            // client-side error
            errorMessage = `Error: ${error.error.message}`;
          } else {
            // server-side error
            errorMessage = `Error Code: ${error.status}\nMessage: ${error.message}`;
          }
          this.openSnankBar('Something Went Wrong!');
          return throwError(errorMessage);
        }),map((event: HttpEvent<any>) => {
        if(event instanceof HttpResponse)
        {
          console.log('Http intercepter');
          setTimeout(() => {
          }, 1000);
        } else {

        }
          return event;
      }),
    );

  }

  openSnankBar(msg: string) {
    this._snackBar.open(msg,'Close');
  }
}
