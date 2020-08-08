import { Component, OnInit, NgModule } from '@angular/core';
import { FormControl, Validators, FormGroup, FormBuilder } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';

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
    ReactiveFormsModule
  ],
})

export class AddLecComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
