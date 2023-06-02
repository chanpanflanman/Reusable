import { Component, OnInit } from '@angular/core';
import { DataService } from '../services/data.service';

@Component({
  selector: 'app-second-parent',
  templateUrl: './second-parent.component.html',
  styleUrls: ['./second-parent.component.css']
})

export class SecondParentComponent implements OnInit {
  tableName: string = 'table2'
  spHeaders = ['name', 'job' ,'email', 'age', 'country', 'salary'];
  spBody: any [] = [];

  constructor(private api: DataService) { }

  ngOnInit(): void {
    this.spGetTable(this.tableName);
  }

  spGetTable(tableTwo: string) {
    this.api.getTableService(tableTwo).subscribe((result:any)=> {
      return this.spBody = result;
    })
  }
}
