import { NgModule } from '@angular/core';
import{ CommonModule }from'@angular/common';

import { RichMediaWebComponent } from './richMedialist/rich-media-list.component';
import { RichMediaMobileComponent } from './richMedialist/rich-media-list-mobile.component';

import { CoreModule } from '../../core/core.module';

import { RichMediaRoutingModule } from './rich-media-routing.module';

@NgModule({
  declarations: [
    RichMediaWebComponent,
    RichMediaMobileComponent,
  ],
  imports: [
    RichMediaRoutingModule,
    CommonModule,
    CoreModule
  ]
})


export class RichMediaModule { }
