import { NgModule } from '@angular/core';

import { ReportComponent } from './report.component';
import { ReportRoutingModule } from './report-routing.module';
import { FollowerReportModule } from './follower/follower-report.module';
import { MessageReportModule } from './message/message-report.module';
import { CustomMenuReportModule } from './customMenu/custom-menu-report.module';
import { RichMediaReportModule } from './richMedia/rich-media-report.module';
import { KeywordReportModule } from './keyword/keyword-report.module';

@NgModule({
  declarations: [
    ReportComponent,
    
  ],
  imports: [
    ReportRoutingModule,
    FollowerReportModule,
    MessageReportModule,
    CustomMenuReportModule,
    RichMediaReportModule,
    KeywordReportModule
  ],

})
export class ReportModule { }