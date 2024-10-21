import { Component } from '@angular/core';
import { Character } from '../../interfaces/cahracter-interface';
import { CharacterServiceService } from '../../services/character-service.service';

@Component({
  selector: 'app-characters-list',
  templateUrl: './characters-list.component.html',
  styleUrl: './characters-list.component.css'
})
export class CharactersListComponent {

  listadoCharacters: Character[] = [];

  constructor(private characterService: CharacterServiceService){}

  ngOnInit(): void {
    this.characterService.getCharacterList().subscribe(respuesta => {
      this.listadoCharacters = respuesta.results;
    });

  }
  
}
