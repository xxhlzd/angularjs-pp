import { Injectable }    from '@angular/core';
import { Headers, Http } from '@angular/http';

import 'rxjs/add/operator/toPromise';

import {  } from './user';


@Injectable()
export class ReportService {
    private followerReportUrl = 'http://localhost:8082/reports/followers/daily/30?publicId=600000000218';  // URL to web api 
    
    private messageReportUrl = 'http://localhost:8082/reports/messages/daily/30?publicId=600000000218';
    
    private customMenuReportUrl = 'http://localhost:8082/reports/custom_menu/daily/30?publicId=600000000218';
    
    private richMediaReportUrl = 'http://localhost:8082/reports/richMedia/daily/30?publicId=600000000218';
    
    private keywordReportUrl = 'http://localhost:8082/reports/keywords/daily/30?publicId=600000000218';
    
    constructor(private http: Http) { }
    
    getFollowerReport(): Promise<any> {
        return this.http.get(this.followerReportUrl)
                   .toPromise()
                   .then(response => response.json().data )
                   
      } 
    
    
    getMessageReport(): Promise<any> {
        return this.http.get(this.messageReportUrl)
                   .toPromise()
                   .then(response => response.json().data )
                   
      } 
    
    getCustomMenuReport(): Promise<any> {
        return this.http.get(this.customMenuReportUrl)
                   .toPromise()
                   .then(response => response.json().data )
                   
      } 
    
    getRichMediaReport(): Promise<any> {
        return this.http.get(this.richMediaReportUrl)
                   .toPromise()
                   .then(response => response.json().data )
                   
      } 
    
    getKeyWordReport(): Promise<any> {
        return this.http.get(this.keywordReportUrl)
                   .toPromise()
                   .then(response => response.json().data )
                   
      } 
}