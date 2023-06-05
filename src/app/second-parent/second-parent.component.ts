import { Component, OnInit } from '@angular/core';
import { DataService } from '../services/data.service';
import { CurrencyPipe } from '@angular/common';

@Component({
  selector: 'app-second-parent',
  templateUrl: './second-parent.component.html',
  styleUrls: ['./second-parent.component.css']
})

export class SecondParentComponent implements OnInit {
  tableName: string = 'table2'
  spHeaders = ['name', 'job' ,'email', 'age', 'country', 'salary'];
  spBody: any [] = [];

  constructor(private api: DataService, private curr: CurrencyPipe) { }

  ngOnInit(): void {
    this.spGetTable(this.tableName);
  }

  spGetTable(tableTwo: string) {
    this.api.getTableService(tableTwo).subscribe((result:any)=> {
      this.spBody = result;
      for (let head of this.spHeaders) {
        for (let body of this.spBody) {
          if (head == 'salary') {
            body[head] = this.curr.transform(body[head], 'USD', 'symbol', '4.0');
          }
        }
      }
    })
  }
}
