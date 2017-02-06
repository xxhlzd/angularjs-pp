import { Component } from '@angular/core';

import { OnInit,Output } from '@angular/core';
import { RichMediaService } from '.././rich-media.service';
import { KeysPipe } from '../../../core/keysPipe';


@Component({
    selector : "rich_media",
    templateUrl :'./rich-media-list-mobile.component.html',
    styleUrls: [ '../material.css' ]
    
})

export class RichMediaMobileComponent implements OnInit {
   materialObj ;
   
    
    ngOnInit(): void {
        this.getRichMedia();
        
    }
    
    constructor(private richMediaService: RichMediaService) { }
    
    
    getRichMedia(): void {
        this.richMediaService.getRichMedia().then(res => {
            this.materialObj = res;
        });
    }

}