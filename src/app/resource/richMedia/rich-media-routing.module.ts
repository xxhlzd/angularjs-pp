import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';


import { RichMediaWebComponent } from './richMedialist/rich-media-list.component';
import { RichMediaMobileComponent } from './richMedialist/rich-media-list-mobile.component';

const routes: Routes = [                  
                        
  { path: '',     component: RichMediaWebComponent, children: []},
  { path: '',     component: RichMediaMobileComponent,children: [] }
];


@NgModule({
    imports: [ RouterModule.forChild(routes) ],
    exports: [ RouterModule ]
  })

export class RichMediaRoutingModule {} 