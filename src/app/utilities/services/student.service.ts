import { Injectable } from '@angular/core';
import { Student } from 'src/app/models/studentModel';
import { Observable, of } from 'rxjs';
import { StudentList } from 'src/app/models/studentListModel';
import { MessageService } from './message.service';

@Injectable({
  providedIn: 'root'
})
export class StudentService {

  constructor(private messageService : MessageService) { }

  getStudents(): Observable<Student[]>{
    const students = of(StudentList);
    this.messageService.add('StudentService : Yes yes yes')
    return students;
  }
}
