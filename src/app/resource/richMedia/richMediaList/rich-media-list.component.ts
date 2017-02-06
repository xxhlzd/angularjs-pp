import { Component } from '@angular/core';

import { OnInit,Output } from '@angular/core';
import { RichMediaService } from './../rich-media.service';



import { MaterialObj } from '../../materialObj';
//import { Material } from '../../material';

@Component({
    selector : "rich_media",
    templateUrl :'./rich-media-list.component.html',
})

export class RichMediaWebComponent implements OnInit {
   materialObj : MaterialObj;
  // materials :Material[];
   
    
    ngOnInit(): void {
        this.getRichMedia();
        
    }
    
    constructor(private richMediaService: RichMediaService) { }
    
    
    getRichMedia(): void {
        this.richMediaService.getRichMedia().then(res => {
            this.materialObj = res;
            /*this. materials = this.materialObj.publicMaterialList;
            alert(this.materials[0].public_id)*/
            
        });
    }

}

/*import {Pipe, PipeTransform} from '@angular/core';


@Pipe({name: 'keys'})
export class KeysPipe implements PipeTransform {
  transform(value, args:string[]) : any {
    let keys = [];
    for (let key in value) {
      keys.push({key: key, value: value[key]});
    }
    return keys;
  }
}*/