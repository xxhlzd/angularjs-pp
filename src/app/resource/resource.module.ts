import { NgModule } from '@angular/core';

import {ResourceComponent } from './resource.component';
import {ResourceRoutingModule } from './resource-routing.module';
import {RichMediaModule} from './richMedia/rich-media.module';

@NgModule({
  declarations: [
    ResourceComponent,
    
  ],
  imports: [
    ResourceRoutingModule,
    RichMediaModule
  ],

})
export class ResourceModule { }