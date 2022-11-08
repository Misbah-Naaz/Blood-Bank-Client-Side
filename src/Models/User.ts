export class User{
    userID!: number;
    firstName!: string;
    lastName!: string;
    dateOfBirth!: Date;
    mobileNumber!: string;
    gender!: string;
    email: string = '';
    password: string = '';
    userRole: string = '';
    questionId : number = 0;
    question : string = '';
    answer : string = '';
}