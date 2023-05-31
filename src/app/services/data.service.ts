import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(private http: HttpClient) { }

  getTableService(){
    return this.http.get<any>("http://localhost:3000/table");
  }

  getSecondTableService(){
    return this.http.get<any>("http://localhost:5000/table")
  }

  getThirdTableService(){
    return this.http.get<any>("http://localhost:6000/table")
  }
}
