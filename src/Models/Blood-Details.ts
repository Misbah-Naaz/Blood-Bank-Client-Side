import { TeardownLogic } from "rxjs";

export class BloodDetails{
    bloodId:number=0;
    bloodGroup:string='';
    available:boolean=true;
    donatedBy:string='';
    useBefore:Date=new Date();
    price:number=0;
}
export class DonorHistory{
    bloodGroup!:string;
    age!:number;
    disease!:string;
    unit!:number;
    date!:Date;
}
export class PatientDetail{
    pName!:string;
    bloodGroup!:string;
    unit!:number;
    reason!:string;
    address!:string;
    date!:Date;
    mno!:string;
}
export class DonorDetail{
    dName!:string;
    bloodGroup!:string;
    age!:number;
    disease!:string;
    unit!:number;
    date!:Date;
}