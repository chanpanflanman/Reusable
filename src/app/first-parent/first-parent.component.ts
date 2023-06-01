import { Component, OnInit } from '@angular/core';
import { DataService } from '../services/data.service';
@Component({
  selector: 'app-first-parent',
  templateUrl: './first-parent.component.html',
  styleUrls: ['./first-parent.component.css']
})

export class FirstParentComponent implements OnInit {
  tableName: string = 'table1'
  fpHeaders: any = ['name', 'email','phone', 'website'];
  fpBody: any [] = [];

  constructor(private api: DataService) { }

  ngOnInit(): void {
    this.fpGetTable(this.tableName);
  }

  fpGetTable(tableOne: string) {
    this.api.getTableService(tableOne).subscribe((result: any) => {
      return this.fpBody = result;
    });
  }
}
