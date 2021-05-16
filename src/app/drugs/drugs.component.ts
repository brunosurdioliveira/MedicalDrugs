import { Component, Input, OnInit } from '@angular/core';
import { drugs } from '../drugs'

@Component({
  selector: 'app-drugs',
  templateUrl: './drugs.component.html',
  styleUrls: ['./drugs.component.css']
})

export class DrugsComponent implements OnInit {

  //variables
  @Input() drugs = drugs;


  constructor() { }

  ngOnInit(): void {
  }
}
