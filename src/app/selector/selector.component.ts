import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-selector',
  templateUrl: './selector.component.html',
  styleUrls: ['./selector.component.css']
})
export class SelectorComponent implements OnInit{
  hideList = true;
  tableNameDisplay:string = 'default';

  ngOnInit(): void {
  }

  showDropDown() {
    this.hideList = false;
  }
  
  hideOptionFP() {
    this.hideList = true;
    this.tableNameDisplay = 'firstparent';
  }
  hideOptionSP() {
    this.hideList = true;
    this.tableNameDisplay = 'secondparent';
  }
  hideOptionTP() {
    this.hideList = true;
    this.tableNameDisplay = 'thirdparent';
  }
}
