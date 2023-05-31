import { Component } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'app-third-parent',
  templateUrl: './third-parent.component.html',
  styleUrls: ['./third-parent.component.css']
})
export class ThirdParentComponent {
  
  id: any;
  idForm = new FormGroup({
    val: new FormControl()
  })

  submitID() {
    this.id = this.idForm.value;
    console.log(this.id);
  }
}
