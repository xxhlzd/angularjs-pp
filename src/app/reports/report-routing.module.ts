import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';


import { FollowerReportComponent } from './follower/follower-report.component';
import { MessageReportComponent } from './message/message-report.component';
import { CustomMenuReportComponent } from './customMenu/custom-menu-report.component';
import { RichMediaReportComponent } from './richMedia/rich-media-report.component';
import { KeywordReportComponent } from './keyword/keyword-report.component';

import { ReportComponent } from './report.component';


const routes: Routes = [
  { path: 'reports',     component: ReportComponent ,
      children: [
               { path: 'followers',     component: FollowerReportComponent },
               { path: 'messages',     component: MessageReportComponent },
               { path: 'custom_menu',     component: CustomMenuReportComponent },
               { path: 'richMedia',     component: RichMediaReportComponent },
               { path: 'keywords',     component: KeywordReportComponent },
               ] }
];

@NgModule({
    imports: [ RouterModule.forChild(routes) ],
    exports: [ RouterModule ]
  })

export class ReportRoutingModule {} 



