import { Component, Input, OnInit } from '@angular/core';
import * as XLSX from 'xlsx';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css']
})
export class TableComponent implements OnInit {
  @Input() headerArray: any = [];
  @Input() bodyArray: any[] = [];
  
  headerFlag: boolean = true;
  fileName: string = '';

  ngOnInit(): void {
  }

  constructor() { }

  toExcel() {
    this.dateFileName();
    let tableinfo = document.getElementById('table');

    // To find max length, for each column's cells
    let maxLengthsArray = [];
    let maxLength = 0;
    for (let head of this.headerArray) {
      for (let body of this.bodyArray) {
        body[head] = body[head];
        if (typeof(body[head]) == 'number') {
          body[head] = body[head].toString();
        }
        if (body[head].length > maxLength) {
          maxLength = body[head].length;
        }
      }
      maxLengthsArray.push(maxLength);
      maxLength = 0;
    }

    /* Using MaxLegnthsArray, we push each value into an array that takes the adequate lengths per column, comparing both content and header lengths */

    let colWithd = [{ wch: 2 }]; // Initial value for serial no (Sr)
    for (let i = 0; i < this.headerArray.length - 1; i++) {
      if (this.headerArray.length > maxLengthsArray[i]) {
        colWithd.push({ wch: this.headerArray.length })

      } else if (this.headerArray.length == maxLengthsArray[i]) {
        colWithd.push({ wch: (maxLengthsArray[i] + 1) })

      } else {
        colWithd.push({ wch: maxLengthsArray[i] })
      }
    }

    const ws: XLSX.WorkSheet = XLSX.utils.table_to_sheet(tableinfo)
    ws["!cols"] = colWithd;

    const wb: XLSX.WorkBook = XLSX.utils.book_new();
    XLSX.utils.book_append_sheet(wb, ws, 'Sheet1');

    XLSX.writeFile(wb, this.fileName);
  }

  dateFileName() {
    const date = new Date();
    let day = date.getDate();
    let month = date.getMonth();
    let year = date.getFullYear();
    let hour = date.getHours();
    let minutes = date.getMinutes();
    let seconds = date.getSeconds();

    this.fileName = `${day}.${month}.${year}_${hour}.${minutes}.${seconds}.xlsx`;
  }
}
