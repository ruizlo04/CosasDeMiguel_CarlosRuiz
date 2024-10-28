import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Pokemon } from '../../models/pokemon.interface';

@Component({
  selector: 'app-pokemon',
  templateUrl: './pokemon.component.html',
  styleUrls: ['./pokemon.component.css']
})
export class PokemonComponent implements OnInit {
  
  @Input() pokemonDetails: Pokemon | undefined;
  @Input() healthPercentage: number = 100;
  @Output() attacked = new EventEmitter<void>();

  attack(): void {
    this.attacked.emit();
  }

  getHealthBarClass(): string {
    if (this.healthPercentage < 35) {
      return 'health red';
    } else if (this.healthPercentage < 70) {
      return 'health yellow';
    } else {
      return 'health green';
    }
  }

  ngOnInit(): void {}
}