import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';



import { FollowerReportComponent } from './follower-report.component';

const routes: Routes = [                  
                        
  { path: '',     component: FollowerReportComponent, children: []},
];


@NgModule({
    imports: [ RouterModule.forChild(routes) ],
    exports: [ RouterModule ]
  })

export class FollowerReportRoutingModule {} 