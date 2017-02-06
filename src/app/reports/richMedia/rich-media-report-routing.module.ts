import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';



import { RichMediaReportComponent } from './rich-media-report.component';

const routes: Routes = [                  
                        
  { path: '',     component: RichMediaReportComponent, children: []},
];


@NgModule({
    imports: [ RouterModule.forChild(routes) ],
    exports: [ RouterModule ]
  })

export class RichMediaReportRoutingModule {} 