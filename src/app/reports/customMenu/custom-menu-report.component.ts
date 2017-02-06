import { Component } from '@angular/core';

import { OnInit,Output } from '@angular/core';
import { ReportService } from './../report.service';



@Component({
    selector : "custom-menu-report",
    templateUrl :'./custom-menu-report.component.html',
})

export class CustomMenuReportComponent implements OnInit {
   messageReportObj ;
   
   
    
    ngOnInit(): void {
        this.getCustomMenuReport();
        
    }
    
    constructor(private reportService: ReportService) { }
    
    
    getCustomMenuReport(): void {
        this.reportService.getCustomMenuReport().then(res => {
            this.messageReportObj = res;
            alert(this.messageReportObj);
        });
    }

}

