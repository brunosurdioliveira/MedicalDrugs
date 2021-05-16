import { Component, OnInit, Input } from '@angular/core';
import { FormGroup, FormControl, FormArray, FormBuilder, Validators, ReactiveFormsModule, NgForm } from '@angular/forms';
import { drugs } from '../drugs';

@Component({
  selector: 'app-drug-registration',
  templateUrl: './drug-registration.component.html',
  styleUrls: ['./drug-registration.component.css']
})
export class DrugRegistrationComponent implements OnInit {

  @Input() drugs = drugs;
  drugForm = new FormGroup({
    genericName: new FormControl('', Validators.required),
    brandName: new FormControl('', Validators.required),
    strength: new FormControl('', Validators.required),
    dosageForm: new FormControl('', Validators.required)
  });

  onSubmit(){
    drugs.unshift(this.drugForm.value);
    console.warn(this.drugForm.value);
  }
  constructor() { }

  ngOnInit(): void {
  }
}
