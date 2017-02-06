import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';



import { CustomMenuReportComponent } from './custom-menu-report.component';

const routes: Routes = [                  
                        
  { path: '',     component: CustomMenuReportComponent, children: []},
];


@NgModule({
    imports: [ RouterModule.forChild(routes) ],
    exports: [ RouterModule ]
  })

export class CustomMenuReportRoutingModule {} 