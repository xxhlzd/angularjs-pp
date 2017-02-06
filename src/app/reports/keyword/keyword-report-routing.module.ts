import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';



import { KeywordReportComponent } from './keyword-report.component';

const routes: Routes = [                  
                        
  { path: '',     component: KeywordReportComponent, children: []},
];


@NgModule({
    imports: [ RouterModule.forChild(routes) ],
    exports: [ RouterModule ]
  })

export class KeywordReportRoutingModule {} 