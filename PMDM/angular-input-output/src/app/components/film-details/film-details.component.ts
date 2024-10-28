import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Film } from '../../models/film.interface';

@Component({
  selector: 'app-film-details',
  templateUrl: './film-details.component.html',
  styleUrl: './film-details.component.css'
})
export class FilmDetailsComponent {
  @Input() film: Film | undefined;
  @Output() filmChecked = new EventEmitter<number>();

  onCheckClick(filmClicked: Film | undefined) {
    console.log('Film clicked:', filmClicked);

    this.filmChecked.emit(filmClicked?.episode_id);
  }
}
