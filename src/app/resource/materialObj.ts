import { Material} from './material';
import { Resource} from './resource';
import { Page } from '../common/page';


export class MaterialObj {
    materialType : number;
    publicMaterialList :Material[];
    publicResourceList :Resource[];
    page :Page;
}

