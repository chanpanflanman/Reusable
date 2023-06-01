import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-third-parent',
  templateUrl: './third-parent.component.html',
  styleUrls: ['./third-parent.component.css']
})
export class ThirdParentComponent implements OnInit {
  
  headers: string [] = []
  rows: any [] = [];

  ngOnInit(): void {
    this.generateMiniTable(this.rows);
  }

  generateMiniTable(row: any) {
    this.headers = Object.keys(row);
    this.rows = row;
  }
}
