import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders} from '@angular/common/http';
import { User } from 'src/Models/User';
import { LoginRequest } from 'src/Models/LoginRequest';
import { environment } from 'src/environments/environment';
import { RecoverPasswordQuestions } from 'src/Models/RecoverPasswordQuestion';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class BBDService {
  baseurl:string=environment.baseUrl;

  constructor(private http:HttpClient) { }
  getPatientDetails(token:any)
  {
    var header={
      headers:new HttpHeaders().set(`Authorization`,`Bearer ${token}`)
    }
    return this.http.get(this.baseurl+"api/Patient/get",header)
  }
  getDonorDetails(token:any){
    var header={
      headers:new HttpHeaders().set(`Authorization`,`Bearer ${token}`)
    }
    return this.http.get(this.baseurl+"api/Donar/get",header)
  }
  postRegisterUser(userData :User,token:any)
  {
     var header={
    headers:new HttpHeaders().set(`Authorization`,`Bearer ${token}`)
  }
    return this.http.post(this.baseurl+"api/User/add", userData,header)
  }
  getLoginUser()
  {
    return this.http.get(this.baseurl+"api/UserCredential/get")
  }
  LoginUser(Login:LoginRequest)
  {
    return this.http.post(this.baseurl+"api/Account/login",Login)
  }
  getAllUSers()
  {
    return this.http.get(this.baseurl+"api/User/get")
  }
  getUserRoles()
  {
     return this.http.get(this.baseurl+"api/UserRole/get")
  }
  getBloodStockDetails()
  {
   return this.http.get(this.baseurl+"api/BloodStock/get")
  }

  getRecoverPasswordQuestions(token:any):Observable<RecoverPasswordQuestions[]>{
    var header = {
      headers : new HttpHeaders().set('Authorization', `Bearer ${token}`)
    }
    return this.http.get<RecoverPasswordQuestions[]>(this.baseurl + 'api/RecoverPasswordQuestons/get',header);
  }

  getRecoverPasswordQuestionById(token:any, id:any):Observable<RecoverPasswordQuestions>{
    var header = {
      headers : new HttpHeaders().set('Authorization', `Bearer ${token}`)
    }
    return this.http.get<RecoverPasswordQuestions>(this.baseurl + `api/RecoverPasswordQuestons/get/${id}`,header);
  }
}