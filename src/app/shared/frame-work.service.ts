import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse, HttpHeaders, HttpParams } from '@angular/common/http'
import { environment } from '../../environments/environment';
import { Router } from '@angular/router';
import { Observable, Subject, throwError } from 'rxjs';
import { catchError, map } from 'rxjs/operators';
import { LoginComponent } from '../component/login/login.component';
import { MatSnackBar } from '@angular/material/snack-bar';
import { JwtHelperService } from '@auth0/angular-jwt';
import { ENDPOINT } from '../config/config';
const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json'
  })
}


@Injectable({
  providedIn: 'root'
})
export class FrameWorkService {
  user: any;
  APIURL : string = environment.apiUrl
  results$ = new Subject<any>();
  constructor(private http: HttpClient,
    private _snackBar: MatSnackBar,
    private router: Router) {
  }

   authenticate(email: string, password: string) : Observable<any> {
    let payload = {
      email: email,
      password: password
    }
    let url = `${ENDPOINT.login}`
   return this.http.post(url, payload)
  }

  logout() {
   
  }


  

  openSnankBar(msg: string) {
    this._snackBar.open(msg, 'Close');
  }

  openErrorSnakBar(msg: string) {
    this._snackBar.open(msg, 'Error');
  }

  closeSnankBar() {
    this._snackBar.dismiss();
  }


  extractData(token: string, email: string) {
    sessionStorage.setItem(
      'digigujarat-token', token,
    );
    sessionStorage.setItem(
      'username', email
    )
  }

  fetchData(res: any) {
    if (res && res.status === true) {
      return res;
    } else {
      console.log('something went wrong');
      return res;
    }
  }

  public isAuthenticated(): boolean {
    let token: any = sessionStorage.getItem('token');
    if (token) {
      const helper = new JwtHelperService();
      console.log(helper);
      let role = atob(token?.split('.')[1])
      let data = JSON.parse(role);
      console.log(role);
      if(data['role'] != 'Admin') {
        return false;
      }
      if (helper.isTokenExpired(token) === true ) {
        sessionStorage.removeItem('token');
        return false;
      }
      return true;
    } else {
      return false;
    }
  }

  handleError(error: HttpErrorResponse) {
    console.log(error);
    if (error.error instanceof ErrorEvent) {
      console.error('An error occurred:', error.error.message);
    } else {
      console.error(
        `Backend returned code ${error.status}, ` +
        `body was: ${error.error}`);
    }
    // return an ErrorObservable with a user-facing error message
    return throwError('Something went wrong');
  }


  getCategory() : Observable<any> {
     let url = `${ENDPOINT.getCategory}`
    return this.http.get(url)
  }

  getuser() : Observable<any> {
    let url = `${ENDPOINT.getuserList}`;
    return this.http.get(url);
  }


}
