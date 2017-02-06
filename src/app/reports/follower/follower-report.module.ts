import { NgModule } from '@angular/core';
import{ CommonModule }from'@angular/common';

import { FollowerReportComponent } from './follower-report.component';

import { CoreModule } from '../../core/core.module';

import { FollowerReportRoutingModule } from './follower-report-routing.module';

@NgModule({
  declarations: [
    FollowerReportComponent,
  ],
  imports: [
    FollowerReportRoutingModule,
    CommonModule,
    CoreModule
  ]
})


export class FollowerReportModule { }
