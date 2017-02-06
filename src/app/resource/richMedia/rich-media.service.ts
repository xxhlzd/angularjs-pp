import { Injectable }    from '@angular/core';
import { Headers, Http } from '@angular/http';

import 'rxjs/add/operator/toPromise';

import {  } from './user';


@Injectable()
export class RichMediaService {
    private richMediaUrl = 'http://10.10.130.71:8082/resources/richMedia?publicId=600000000218&showType=paging';  // URL to web api 
    materialObj;
    constructor(private http: Http) { }
    
    getRichMedia(): Promise<any> {
        return this.http.get(this.richMediaUrl)
                   .toPromise()
                   .then(response => response.json().data )
                   
      } 
}