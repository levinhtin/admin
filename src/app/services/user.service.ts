import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';

import { Observable }     from 'rxjs/Observable';

import { IUser }     from '../models/user';


@Injectable()
export class UserService {
  private http: Http;
  constructor (_http: Http) {
    this.http = _http;
  }
  public getUsers(): Observable<IUser[]> {
    return this.http.get('api/user')
                    .map(this.extractData)
                    .catch(this.handleError);
  }

  private extractData(res: Response): Observable<any> {
    if (res.status < 200 || res.status >= 300) {
      throw new Error('Bad response status: ' + res.status);
    }
    let body: any = res.json();
    return body.data || { };
  }
  private handleError (error: any): Observable<any> {
    // In a real world app, we might send the error to remote logging infrastructure
    let errMsg: string = error.message || 'Server error';
    console.error(errMsg); // log to console instead
    return Observable.throw(errMsg);
  }
}
