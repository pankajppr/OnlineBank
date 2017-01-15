import { Injectable } from '@angular/core';
import {Http, Headers, Response, RequestOptions} from '@angular/http';
import {Observable} from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import * as AppUtils from '../utils/app.utils';
import {SecurityToken} from '../security/securityToken';
import {Account} from '../account/account';
import {AccountEventsService} from '../account/account.events.service';
import {Router} from '@angular/router';
import 'rxjs/add/operator/catch';
import {Token} from '../dto/token';

@Injectable()
export class LoginService {

  constructor (private http: Http, private accountEventService:AccountEventsService,private router: Router) {}

  sendCredential(username: string, password: string) {
    let url = "http://localhost:9090/user";
    let headers = new Headers();
        headers.append('Authorization', 'Basic ' +  btoa(username + ":" + password)); 
        headers.append('X-Requested-With', 'XMLHttpRequest');
        return this.http.get(url, {headers: headers, withCredentials : true}) 
            .map((res:Response) => {
               let account:Account = new Account(res.json());
               return account;
            })
            .catch(this.handleError);         
  }


  logout() {
     let resourceUrl = "http://localhost:9090/logout";
     let headers = new Headers({'X-Requested-With': 'XMLHttpRequest',});     
     return this.http.post(resourceUrl,{}, {headers: headers, withCredentials : true} ) // payload is compulsory to work in a post request
     .map(res => res.json())
     .catch(this.handleError);
   }

   private handleError (error: Response | any) {
  // In a real world app, we might use a remote logging infrastructure
  let errMsg: string;
  if (error instanceof Response) {
    const body = error.json() || '';
    const err = body.error || JSON.stringify(body);
    errMsg = `${error.status} - ${error.statusText || ''} ${err}`;
  } else {
    errMsg = error.message ? error.message : error.toString();
  }
  console.error(errMsg);
  return Observable.throw(errMsg);
}

}
