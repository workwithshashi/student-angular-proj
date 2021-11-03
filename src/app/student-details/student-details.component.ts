import { Component, OnInit, Input } from '@angular/core';
import { Student } from '../models/studentModel';

@Component({
  selector: 'app-student-details',
  templateUrl: './student-details.component.html',
  styleUrls: ['./student-details.component.css']
})
export class StudentDetailsComponent implements OnInit {

  @Input() student?: String;

  constructor() { }

  ngOnInit(): void {
  }

}
