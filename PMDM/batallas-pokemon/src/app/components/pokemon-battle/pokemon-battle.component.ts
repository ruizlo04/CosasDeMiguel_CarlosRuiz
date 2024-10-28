import { Component, OnInit } from '@angular/core';
import { PokemonService } from '../../services/pokemon.service';
import { Pokemon } from '../../models/pokemon.interface';

@Component({
  selector: 'app-pokemon-battle',
  templateUrl: './pokemon-battle.component.html',
  styleUrls: ['./pokemon-battle.component.css']
})
export class PokemonBattleComponent implements OnInit {

  pokemon1Details: Pokemon | undefined;
  pokemon2Details: Pokemon | undefined;
  pokemon1HealthPercentage: number = 100;
  pokemon2HealthPercentage: number = 100;
  pokemon1Id: number = 1; 
  pokemon2Id: number = 4;   
  pokemonList: Pokemon[] = [];

  constructor(private pokemonService: PokemonService) {}

  ngOnInit() {
    this.loadPokemonDetails();
  }

  loadPokemonDetails() {
    this.pokemonService.getPokemonDetailsById(this.pokemon1Id).subscribe(details => {
      this.pokemon1Details = details;
      this.pokemon1HealthPercentage = 100;
    });

    this.pokemonService.getPokemonDetailsById(this.pokemon2Id).subscribe(details => {
      this.pokemon2Details = details;
      this.pokemon2HealthPercentage = 100;
    });
  }

  onAttackFromPokemon1(): void {
    this.pokemon2HealthPercentage -= 10;
    this.checkBattleOutcome();
  }

  onAttackFromPokemon2(): void {
    this.pokemon1HealthPercentage -= 10;
    this.checkBattleOutcome();
  }

  checkBattleOutcome(): void {
    if (this.pokemon1HealthPercentage <= 0) {
      alert(`${this.pokemon2Details?.name} wins!`);
    } else if (this.pokemon2HealthPercentage <= 0) {
      alert(`${this.pokemon1Details?.name} wins!`);
    }
  }

  onPokemon1IdChange(event: Event): void {
    const input = event.target as HTMLInputElement;
    this.pokemon1Id = +input.value;
    this.loadPokemonDetails();
  }

  onPokemon2IdChange(event: Event): void {
    const input = event.target as HTMLInputElement;
    this.pokemon2Id = +input.value;
    this.loadPokemonDetails();
  }
}