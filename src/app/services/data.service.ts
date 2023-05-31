import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(private http: HttpClient) { }

  getTableService(){
    return this.http.get<any>("http://localhost:3000/table").pipe(map((res:any)=> {
      return res;
    }))
  }

  getSecondTableService(){
    return this.http.get<any>("http://localhost:5000/table")
  }

  getThirdTableService(){
    return this.http.get<any>("http://localhost:6000/table")
  }
}
