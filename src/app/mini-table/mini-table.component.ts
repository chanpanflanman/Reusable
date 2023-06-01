import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-mini-table',
  templateUrl: './mini-table.component.html',
  styleUrls: ['./mini-table.component.css']
})
export class MiniTableComponent {
  @Input() miniHeadArray: string [] = [];
  @Input() miniBodyArray: any[] = [];

}
