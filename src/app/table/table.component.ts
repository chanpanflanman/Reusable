import { Component, EventEmitter, Input, Output } from '@angular/core';
import * as XLSX from 'xlsx';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css']
})
export class TableComponent {
  @Input() headerArray: any = [];
  @Input() bodyArray: any[] = [];

  file = 'ExcelSheet.xlsx'

  constructor() { }

  toExcel() {
    let tableinfo = document.getElementById('table');
    const ws: XLSX.WorkSheet = XLSX.utils.table_to_sheet(tableinfo)

    const wb: XLSX.WorkBook = XLSX.utils.book_new();
    XLSX.utils.book_append_sheet(wb, ws, 'Sheet1');

    XLSX.writeFile(wb, this.file);
  }
}
