import { NgModule } from '@angular/core';
import{ CommonModule }from'@angular/common';

import { MessageReportComponent } from './message-report.component';

import { CoreModule } from '../../core/core.module';

import { MessageReportRoutingModule } from './message-report-routing.module';

@NgModule({
  declarations: [
    MessageReportComponent,
  ],
  imports: [
    MessageReportRoutingModule,
    CommonModule,
    CoreModule
  ]
})


export class MessageReportModule { }
