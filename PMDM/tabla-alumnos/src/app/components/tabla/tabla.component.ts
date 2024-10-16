import { Component } from '@angular/core';
import { MatTableModule } from '@angular/material/table';
import { MatCheckboxModule } from '@angular/material/checkbox';

export interface Student {
  studentNumber: number;
  firstName: string;
  lastName: string;
  nif: string;
  age: number;
  enrolledCourse: string;
}

const ELEMENT_DATA: Student[] = [
  { studentNumber: 1, firstName: 'Carlos', lastName: 'Ruiz', nif: '12324A', age: 20, enrolledCourse: '2ºDAM' },
  { studentNumber: 2, firstName: 'Pepe', lastName: 'Segura', nif: '1234S', age: 21, enrolledCourse: '2ºDAM' },
  { studentNumber: 3, firstName: 'Rafa', lastName: 'Alexander', nif: '1234D', age: 21, enrolledCourse: '2ºDAM' },
  { studentNumber: 4, firstName: 'Pablo', lastName: 'Cámara', nif: '1234F', age: 25, enrolledCourse: '2ºDAM' },
];

@Component({
  selector: 'app-tabla',
  templateUrl: './tabla.component.html',
  styleUrls: ['./tabla.component.css'],
  standalone: true,
  imports: [MatTableModule, MatCheckboxModule],
})
export class TablaComponent {
  displayedColumns: string[] = ['studentNumber', 'firstName', 'lastName', 'nif', 'age', 'enrolledCourse'];
  allColumns: string[] = ['studentNumber', 'firstName', 'lastName', 'nif', 'age', 'enrolledCourse'];
  dataSource = ELEMENT_DATA;
  setAll(column: string, checked: boolean) {
    if (checked) {
      if (!this.displayedColumns.includes(column)) {
        this.displayedColumns.push(column);
      }
    } else {
      const newDisplayedColumns = [];
      for (let i = 0; i < this.displayedColumns.length; i++) {
        if (this.displayedColumns[i] !== column) {
          newDisplayedColumns.push(this.displayedColumns[i]);
        }
      }
      this.displayedColumns = newDisplayedColumns;
    }
  }

}