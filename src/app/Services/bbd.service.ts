import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http';
import { User, UserCredential } from 'src/Models/Blood-Details';
@Injectable({
  providedIn: 'root'
})
export class BBDService {

  constructor(private http:HttpClient) { }
  getPatientDetails()
  {
    return this.http.get("https://localhost:7148/patients")
  }
  getDonorDetails(){
    return this.http.get("https://localhost:7148/api/Donars")
  }
  postRegisterUser(userData :User)
  {
    return this.http.post("https://localhost:7148/api/User/add", userData)
  }
  getLoginUser()
  {
    return this.http.get("https://localhost:7148/api/UserCredential/get")
  }
  getAllUSers()
  {
    return this.http.get("https://localhost:7148/api/User/get")
  }
}