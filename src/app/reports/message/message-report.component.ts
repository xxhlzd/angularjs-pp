import { Component } from '@angular/core';

import { OnInit,Output } from '@angular/core';
import { ReportService } from './../report.service';



@Component({
    selector : "message-report",
    templateUrl :'./message-report.component.html',
})

export class MessageReportComponent implements OnInit {
   messageReportObj ;
   voice;
   text;
   video;
   image;
   messagecount;
   
    
    ngOnInit(): void {
        this.getMessageReport();
        
    }
    
    constructor(private reportService: ReportService) { }
    
    
    getMessageReport(): void {
        this.reportService.getMessageReport().then(res => {
            this.messageReportObj = res;
            alert (res.yCol.text);
            this.messagecount = res.messagecount;
            
        });
    }

}

