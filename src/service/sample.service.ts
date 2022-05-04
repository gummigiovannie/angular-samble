import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable()
export class SampleService {
  constructor(private http: HttpClient) { }
  BaseUrl: string = "";

  showTodayDate() {
    let ndate = new Date();
    return ndate;
  }

  requestPost() {

  }

  requestPut() {

  }

  requestPatch() {

  }

  requestGet() {

  }

  //GET ALL
  GetAll(): Observable<any> {
    return this.http.get(this.BaseUrl + "/all");
  }

  //GET SINGLE
  GetSingle(id: any): Observable<any> {
    return this.http.get(this.BaseUrl + "/single/" + id);
  }

  //PUT
  Update(obj: Object) {
    const data = JSON.stringify(obj);
    return this.http.put(this.BaseUrl, data, {
      headers: new HttpHeaders({
        "Content-Type": "application/json",
      }),
    });
  }

  //POST
  Create(obj: Object) {
    const data = JSON.stringify(obj);
    return this.http.post(this.BaseUrl, data, {
      headers: new HttpHeaders({
        "Content-Type": "application/json",
      }),
    });
  }
}
