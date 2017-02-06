import { NgModule } from '@angular/core';
import{ CommonModule }from'@angular/common';

import { CustomMenuReportComponent } from './custom-menu-report.component';

import { CoreModule } from '../../core/core.module';

import { CustomMenuReportRoutingModule } from './custom-menu-report-routing.module';

@NgModule({
  declarations: [
    CustomMenuReportComponent,
  ],
  imports: [
    CustomMenuReportRoutingModule,
    CommonModule,
    CoreModule
  ]
})


export class CustomMenuReportModule { }
