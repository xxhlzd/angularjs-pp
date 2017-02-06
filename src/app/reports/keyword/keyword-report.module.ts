import { NgModule } from '@angular/core';
import{ CommonModule }from'@angular/common';

import { KeywordReportComponent } from './keyword-report.component';

import { CoreModule } from '../../core/core.module';

import { KeywordReportRoutingModule } from './keyword-report-routing.module';

@NgModule({
  declarations: [
    KeywordReportComponent,
  ],
  imports: [
    KeywordReportRoutingModule,
    CommonModule,
    CoreModule
  ]
})


export class KeywordReportModule { }
