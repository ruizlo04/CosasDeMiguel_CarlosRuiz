import { Component } from '@angular/core';
import { StudentDto } from '../../models/alumno.dto';

@Component({
  selector: 'app-alumno-add-form',
  templateUrl: './alumno-add-form.component.html',
  styleUrl: './alumno-add-form.component.css'
})
export class AlumnoAddFormComponent {

  courseList: string[] = ['1ºDam', '2ºDam', '1ºAsir', '2ºAsir'];
  sexoList: string[] = ['Hombre', 'Mujer', 'Otro'];
  nifLetter: string = '';
  submitted = false;
  passwordMismatch: boolean = false;
  repeatPassword: string = '';
  student = new StudentDto('', '', '', '', '', '', '', '', 18, '');

  constructor() {}

  calculateNifLetter(nif: string): string {
    const letters = 'TRWAGMYFPDXBNJZSQVHLCKE';
    const number = parseInt(nif, 10);
    if (!isNaN(number) && nif.length === 8) {
      return letters[number % 23];
    }
    return '';
  }

  onNifChange() {
    this.nifLetter = this.calculateNifLetter(this.student.nif);
  }

  checkPasswords() {
    this.passwordMismatch = this.student.contrasenya !== this.repeatPassword;
  }

  addStudent() {
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailPattern.test(this.student.email)) {
      console.error('Email no válido. Debe contener un @.');
      return;
    }
    if (this.student.nif.length !== 8 || this.nifLetter === '') {
      console.error('DNI no válido. Debe tener 8 números.');
      return;
    }
    if (this.passwordMismatch) {
      console.error('Las contraseñas no coinciden.');
      return;
    }
    this.student.nif += this.nifLetter; 
    console.log(this.student);
    this.submitted = true;
  }
}
