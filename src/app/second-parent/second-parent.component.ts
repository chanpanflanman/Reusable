import { Component, OnInit } from '@angular/core';
import { DataService } from '../services/data.service';
import { Data } from '@angular/router';

@Component({
  selector: 'app-second-parent',
  templateUrl: './second-parent.component.html',
  styleUrls: ['./second-parent.component.css']
})

export class SecondParentComponent implements OnInit {
  spHeaders = ['name', 'job' ,'email', 'age', 'country'];
  spBody: any [] = [];

  constructor(private api: DataService) { }

  ngOnInit(): void {
    this.spGetTable();
  }

  spGetTable() {
    this.api.getSecondTableService().subscribe((result:any)=> {
      return this.spBody = result;
    })
  }
}
