import { NgModule } from '@angular/core';
import{ CommonModule }from'@angular/common';

import { RichMediaReportComponent } from './rich-media-report.component';

import { CoreModule } from '../../core/core.module';

import { RichMediaReportRoutingModule } from './rich-media-report-routing.module';

@NgModule({
  declarations: [
    RichMediaReportComponent,
  ],
  imports: [
    RichMediaReportRoutingModule,
    CommonModule,
    CoreModule
  ]
})


export class RichMediaReportModule { }
