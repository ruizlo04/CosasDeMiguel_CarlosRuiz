import { Component } from '@angular/core';

@Component({
  selector: 'app-battle',
  templateUrl: './battle.component.html',
  styleUrl: './battle.component.css',
})
export class BattleComponent {
  pokemonTurn = 1;
  pokemonPlayer1Id = 55;
  pokemonPlayer2Id = 24;
  lifePokemon1 = 100;
  lifePokemon2 = 100;
  winner: string | null = null;

  applyDamage(damage: number) {
    if (this.winner) return;  // Evitar aplicar daño si ya hay un ganador

    if (this.pokemonTurn === 1) {
      this.lifePokemon2 -= damage;
      if (this.lifePokemon2 <= 0) {
        this.lifePokemon2 = 0;
        this.winner = 'Player 1';
      } else {
        this.pokemonTurn = 2;
      }
    } else {
      this.lifePokemon1 -= damage;
      if (this.lifePokemon1 <= 0) {
        this.lifePokemon1 = 0;
        this.winner = 'Player 2';
      } else {
        this.pokemonTurn = 1;
      }
    }
  }

  resetGame() {
    this.lifePokemon1 = 100;
    this.lifePokemon2 = 100;
    this.pokemonTurn = 1;
    this.winner = null;
  }
}
