import { Injectable } from '@angular/core';
import {Http, Headers, Response} from '@angular/http';
import {Observable}     from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import {Token} from '../dto/token';


@Injectable()
export class HomeService {
  constructor (private http: Http) {}

getHomeResources(token:Token){
    let resourceUrl = "http://localhost:9000";
     let headers = new Headers();
     headers.append('X-Requested-With', 'XMLHttpRequest');
     headers.append('X-Auth-Token', token.token);
     return this.http.get(resourceUrl, {headers: headers, withCredentials : true} )
     .map(res => res.json());
}
}