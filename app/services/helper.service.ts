import { Injectable } from '@angular/core';
import {Http, Headers, Response} from '@angular/http';
import {Observable}     from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import * as AppUtils from '../utils/app.utils';
import {SecurityToken} from '../security/securityToken';
import {Account} from '../account/account';
import {AccountEventsService} from '../account/account.events.service';
import {Router} from '@angular/router';

@Injectable()
export class HelperService {
     constructor (private http: Http, private router: Router) {}
        
     getToken() {
     let headers = new Headers();
     headers.append('X-Requested-With', 'XMLHttpRequest');
     let tokenUrl = "http://localhost:9090/token";
     return this.http.get(tokenUrl, {headers: headers, withCredentials : true} )
     .map(res => res.json());     
   }

}

