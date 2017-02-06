import { Component } from '@angular/core';

import { OnInit,Output } from '@angular/core';
import { ReportService } from './../report.service';



@Component({
    selector : "rich-media-report",
    templateUrl :'./rich-media-report.component.html',
})

export class RichMediaReportComponent implements OnInit {
   richMediaReportObj ;
   xCol;
   received_by;
   page_view;
   imageTextTotal;
   
    
    ngOnInit(): void {
        this.getRichMediaReport();
        
    }
    
    constructor(private reportService: ReportService) { }
    
    
    getRichMediaReport(): void {
        this.reportService.getRichMediaReport().then(res => {
            this.richMediaReportObj = res;
            alert (res.yCol.received_by);
            this.imageTextTotal = res.imageTextTotal;
            
        });
    }

}

