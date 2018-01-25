import { Component } from '@angular/core';
import {FormArray, FormControl, FormGroup, Validators} from '@angular/forms';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  myForm: FormGroup;
  constructor() {
    this.myForm = new FormGroup({
      'name': new FormControl('', [Validators.required]),
      'fatherName': new FormControl('', [Validators.required]),
      'age': new FormControl('', [Validators.required]),
      'phone': new FormArray([
        new FormControl('+375', Validators.required)
      ]),
      'email': new FormArray([
        new FormControl('', [
          Validators.required, Validators.pattern('[a-zA-Z_]+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}')
        ])
      ])
    });
  }
  addPhone() {
    (<FormArray>this.myForm.controls['phone'].push(new FormControl('+375', Validators.required));
  }
  addEmail() {
    (<FormArray>this.myForm.controls['email'].push(new FormControl('', [
      Validators.required, Validators.pattern('[a-zA-Z_]+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}')
    ])));
  }
  submit() {
    console.log(this.myForm);
  }
}
