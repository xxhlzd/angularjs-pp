import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';

import { RichMediaService } from './resource/richMedia/rich-media.service';
import { ReportService } from './reports/report.service';

import { CoreModule } from './core/core.module';

import { AppRoutingModule }     from './app-routing.module';
import { ResourceModule }  from './resource/resource.module';
import { ReportModule } from './reports/report.module';
 
import './rxjs-extensions';


@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    CoreModule,
    AppRoutingModule,
    ResourceModule,
    ReportModule
    
  ],
  exports :[CoreModule],
  providers: [RichMediaService,ReportService],
  bootstrap: [AppComponent]
})
export class AppModule { }
