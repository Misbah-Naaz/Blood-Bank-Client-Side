import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http';
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
  getLoginDetails()
  {
    return this.http.get("https://localhost:7148/RegisterUser")
  }
}