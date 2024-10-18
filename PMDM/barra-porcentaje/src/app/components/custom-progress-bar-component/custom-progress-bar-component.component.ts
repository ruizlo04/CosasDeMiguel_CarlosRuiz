import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-custom-progress-bar-component',
  templateUrl: './custom-progress-bar-component.component.html',
  styleUrls: ['./custom-progress-bar-component.component.css'] 
})
export class CustomProgressBarTwoComponent {
  @Input() progreso = 80;

  @Input() value = 0;

  getWidth() {
    return `width: ${this.value}%`;
  }
  
  getProgressColor(): string {
    if (this.progreso <= 25) {
      return 'danger';
    } else if (this.progreso > 25 && this.progreso <= 50) {
      return 'warning';
    } else if (this.progreso > 50 && this.progreso <= 75) {
      return 'primary';
    } else {
      return 'success';
    }
  }
}