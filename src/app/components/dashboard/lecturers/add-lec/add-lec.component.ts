import { Component, OnInit, NgModule } from '@angular/core';
import { FormControl, Validators, FormGroup, FormBuilder } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatButtonModule } from '@angular/material/button';

@Component({
  selector: 'app-add-lec',
  templateUrl: './add-lec.component.html',
  styleUrls: ['./add-lec.component.scss']
})

@NgModule({
  imports: [
    FormControl,
    FormBuilder,
    FormGroup,
    Validators,
    MatFormFieldModule,
    MatButtonModule
  ],
})

export class AddLecComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
