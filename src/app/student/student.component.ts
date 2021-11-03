import { Component, OnInit } from '@angular/core';
import { StudentList } from '../models/studentListModel';
import { Student } from '../models/studentModel';

@Component({
  selector: 'app-student',
  templateUrl: './student.component.html',
  styleUrls: ['./student.component.css']
})
export class StudentComponent implements OnInit {
  student: Student ={
    id:1,
    name: 'Shashi'
  }
  //local variable
  studentlist = StudentList;
  constructor() { }

  ngOnInit(): void {  
  }

}
