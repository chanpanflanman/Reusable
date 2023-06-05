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
        if (typeof (body[head]) == 'number') {
          body[head] = body[head].toString();
        }
        if (body[head].length > maxLength) {
          maxLength = body[head].length;
        }
      }
      maxLengthsArray.push(maxLength);
      maxLength = 0;
    }
    console.log(maxLengthsArray);

    /**
    * Using @param maxLengthsArray, we now have the maximum cell length for each category
    * We use this to push the adequate length of columns, either when the header is larger than the content, equal to or based on the largest cell content per header.
    */

    let colWidth = [{ wch: 2 }]; // Initial value for serial no (Sr)
    for (let i = 0; i < this.headerArray.length; i++) {
      if (this.headerArray.length > maxLengthsArray[i]) {
        colWidth.push({ wch: this.headerArray[i].length })

      } else if (this.headerArray.length == maxLengthsArray[i]) {
        colWidth.push({ wch: (maxLengthsArray[i] + 1) })

      } else {
        colWidth.push({ wch: maxLengthsArray[i] })
      }
    }

    /**
     * We now have @param colWidth to define the worksheet's column widths respectively
     */

    const ws: XLSX.WorkSheet = XLSX.utils.table_to_sheet(tableinfo)
    ws["!cols"] = colWidth;
    const wb: XLSX.WorkBook = XLSX.utils.book_new();
    XLSX.utils.book_append_sheet(wb, ws, 'Sheet1');

    XLSX.writeFile(wb, this.fileName);
  }

  /**
   * To create a format for current date-time as a file name
   * Using the methods of Date(), we can manipulate the file name as a format of these values in whatever way we want
   * Currently it follows 'dd.mm.yy_h.m.s.xlsx'
   */

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
