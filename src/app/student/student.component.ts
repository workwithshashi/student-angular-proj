import { Component, OnInit } from '@angular/core';
import { StudentList } from '../models/studentListModel';
import { Student } from '../models/studentModel';
import { MessageService } from '../utilities/services/message.service';
import { StudentService } from '../utilities/services/student.service';

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
  selectedStudent? : Student;
  students : Student[] = [];
  constructor(private messageService: MessageService, private studentService: StudentService) { }

  ngOnInit(): void { 
    this.getStudents();
  }

  onSelect(s : Student):void{
    this.selectedStudent = s;
    console.log(this.selectedStudent)
  }

  getStudents(): void{
    this.studentService.getStudents().subscribe(students => this.students = students);
  }

}
