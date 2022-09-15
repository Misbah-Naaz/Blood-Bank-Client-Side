export class BloodDetails{
    bloodId:number=0;
    bloodGroup:string='';
    available:boolean=true;
    donatedBy:string='';
    useBefore:Date=new Date();
    price:number=0;
}
export class DonorDetails{
    bloodGroup!:string;
    age!:number;
    disease!:string;
    unit!:number;
    date!:Date;
}