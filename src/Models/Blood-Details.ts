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
    id!:number;
    name!:string;
    age!:number;
    bloodGroup!:string;
    unit!:number;
    disease!:string;
    city!:string;
    date!:Date;
}
export class PatientDetail{
    id!:number;
    name!:string;
    age!:number;
    bloodGroup!:string;
    unit!:number;
    reason!:string;
    address!:string;
    date!:Date;
    phoneNumber!:string;
}
export class DonorDetail{
    id!:number;
    donarName!:string;
    age!:number;
    bloodGroup!:string;
    unit!:number;
    disease!:string;
    donatedAt!:string;
    donatedOn!:Date;
}
export class User{
    userID!: number;
    firstName!: string;
    lastName!: string;
    dateOfBirth!: Date;
    mobileNumber!: string;
    gender!: string;
}
export class UserCredential{
//   UCID:number = 0;
//   UserID:number=0;
  Email: string = '';
  Password: string = '';
  UserRole: string = '';
}