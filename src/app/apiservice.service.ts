import { Injectable } from '@angular/core';
import { HttpClientModule, HttpClient, HttpHeaders} from '@angular/common/http';
import { Studentinfo } from './studentinfo';
import { Observable } from 'rxjs';
import { Url } from './url';
const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable({
  providedIn: 'root'
})
export class ApiserviceService {

  constructor(private http: HttpClient) { }
  public createUser(studentinfo:Studentinfo):Observable<any> {
    console.log('Login API called');
    return this.http.post(Url.createstudent,studentinfo,httpOptions);
  } // end of login
}
