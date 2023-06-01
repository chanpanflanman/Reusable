import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(private http: HttpClient) { }

  getTableService(table: string){
    return this.http.get<any>("http://localhost:3000/" + table).pipe(map((res:any)=> {
      return res;
    }));
  }

  getIDService(table:string, id:number) {
    return this.http.get<any>("http://localhost:3000/" + table + "/" + id).pipe(map((res:any) => {
      return res;
    }))
  }
}
