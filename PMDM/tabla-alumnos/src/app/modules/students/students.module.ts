import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

export interface Student {
  studentNumber: number;
  firstName: string;
  lastName: string;
  nif: string;
  age: number;
  enrolledCourse: string;
}
@NgModule({
  declarations: [],
  imports: [
    CommonModule
  ]
})
export class StudentsModule { }