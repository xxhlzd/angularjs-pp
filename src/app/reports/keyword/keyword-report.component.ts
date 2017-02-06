import { Component } from '@angular/core';

import { OnInit,Output } from '@angular/core';
import { ReportService } from './../report.service';



@Component({
    selector : "keywor-report",
    templateUrl :'./keyword-report.component.html',
})

export class KeywordReportComponent implements OnInit {
   keywordReportObj ;
   
    
    ngOnInit(): void {
        this.getKeyWordReport();
        
    }
    
    constructor(private reportService: ReportService) { }
    
    
    getKeyWordReport(): void {
        this.reportService.getKeyWordReport().then(res => {
            this.keywordReportObj = res;
            
        });
    }

}

