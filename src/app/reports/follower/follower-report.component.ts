import { Component } from '@angular/core';

import { OnInit,Output } from '@angular/core';
import { ReportService } from './../report.service';



@Component({
    selector : "follower-report",
    templateUrl :'./follower-report.component.html',
})

export class FollowerReportComponent implements OnInit {
   followerReportObj ;
   xCols;
   reduces;
   total;
   newFollowers;
   growth;
   accountList;
   
    
    ngOnInit(): void {
        this.getFollowerReport();
        
    }
    
    constructor(private reportService: ReportService) { }
    
    
    getFollowerReport(): void {
        this.reportService.getFollowerReport().then(res => {
            this.followerReportObj = res;
//            alert(res.xCol)
//            this.xCols = res.xCol;
//            alert(res.yCol.reduce);
//            this.reduces = res.yCol.reduce;
            this.accountList = res.accountList;
            
        });
    }

}

