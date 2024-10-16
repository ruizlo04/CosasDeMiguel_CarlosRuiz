import { Component } from '@angular/core';
import {MatTableModule} from '@angular/material/table';
import { Student } from '../../modules/students/students.module';

const ELEMENT_DATA: Student[] = [
  {studentNumber: 1, firstName: 'Carlos', lastName: 'Ruiz', nif: '12324A', age: 20, enrolledCourse: '2ºDAM'},
  {studentNumber: 2, firstName: 'Pepe', lastName: 'Segura', nif: '1234S',  age: 21, enrolledCourse: '2ºDAM'},
  {studentNumber: 3, firstName: 'Rafa', lastName: 'Alexander', nif: '1234D', age: 21, enrolledCourse: '2ºDAM'},
  {studentNumber: 4, firstName: 'Pablo', lastName: 'Cámara', nif: '1234F', age: 25, enrolledCourse: '2ºDAM'},
];

@Component({
  selector: 'app-tabla',
  templateUrl: './tabla.component.html',
  styleUrl: './tabla.component.css',
  standalone: true,
  imports: [MatTableModule],
})

export class TablaComponent {
  displayedColumns: string[] = ['studentNumber', 'firstname', 'lastName', 'nif', 'age', 'enrolledCourse'];
  dataSource = ELEMENT_DATA;
}
