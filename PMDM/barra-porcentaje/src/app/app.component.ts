import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  title = 'progress-bar';
  valorProgreso = 0;

  getProgressColor(){
    if (this.valorProgreso < 20) {
      return 'bg-danger';
    }
    if (this.valorProgreso < 40) {
      return 'bg-warning';
    }
    if (this.valorProgreso < 60) {
      return 'bg-info';
    }
    if (this.valorProgreso < 80) {
      return 'bg-primary';
    }
    return 'bg-success';
  }

}