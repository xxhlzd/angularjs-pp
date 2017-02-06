import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';



import { MessageReportComponent } from './message-report.component';

const routes: Routes = [                  
                        
  { path: '',     component: MessageReportComponent, children: []},
];


@NgModule({
    imports: [ RouterModule.forChild(routes) ],
    exports: [ RouterModule ]
  })

export class MessageReportRoutingModule {} 