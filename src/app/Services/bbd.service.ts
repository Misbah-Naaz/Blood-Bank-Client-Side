import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders} from '@angular/common/http';
import { User } from 'src/Models/User';
import { LoginRequest } from 'src/Models/LoginRequest';
import { environment } from 'src/environments/environment';
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
  getDonorDetails(){
    return this.http.get(this.baseurl+"api/Donars")
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
}