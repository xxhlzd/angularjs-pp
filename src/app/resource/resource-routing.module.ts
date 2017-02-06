import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { ResourceComponent } from './resource.component';

import { RichMediaWebComponent } from './richMedia/richMedialist/rich-media-list.component';
import { RichMediaMobileComponent } from './richMedia/richMedialist/rich-media-list-mobile.component';

const routes: Routes = [
  { path: 'resources',     component: ResourceComponent ,
      children: [
               { path: 'richMedia/web',     component: RichMediaWebComponent },
               { path: 'richMedia/mobile',     component: RichMediaMobileComponent }
               ] }
];


@NgModule({
  imports: [ RouterModule.forChild(routes) ],
  exports: [ RouterModule ]
})

export class ResourceRoutingModule {}