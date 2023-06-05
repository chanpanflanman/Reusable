import { Component, OnInit } from '@angular/core';
import { DataService } from '../services/data.service';
import { CurrencyPipe } from '@angular/common';

@Component({
  selector: 'app-first-parent',
  templateUrl: './first-parent.component.html',
  styleUrls: ['./first-parent.component.css']
})

export class FirstParentComponent implements OnInit {
  tableName: string = 'table1'
  fpHeaders: any = ['name', 'email','phone', 'website', 'salary'];
  fpBody: any [] = [];

  constructor(private api: DataService, private curr: CurrencyPipe) { }

  ngOnInit(): void {
    this.fpGetTable(this.tableName); 
  }

  fpGetTable(tableOne: string) {
    this.api.getTableService(tableOne).subscribe((result: any) => {
      this.fpBody = result;
      for (let head of this.fpHeaders) {
        for (let body of this.fpBody) {
          if (head == 'salary') {
            body[head] = this.curr.transform(body[head], 'USD', 'symbol', '4.0');
          }
        }
      }
    });
  }
}
