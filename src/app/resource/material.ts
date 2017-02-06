import { PublicImageText } from './imagetext';

export class Material {
    material_id: number;
    material_type: number;
    public_id: number;
    material_msg : String;
    res_id :number;
    create_time :Date;
    dmlflag :number;
    res_url : String;
    textImageType : number;
    publicImageTextList: PublicImageText[];
}
