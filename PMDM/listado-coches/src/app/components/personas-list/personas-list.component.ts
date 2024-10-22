import { Component, OnInit } from '@angular/core';
import { Persona } from '../../interfaces/persona.interfaces';
import { PersonasService } from '../../services/personas.service';

@Component({
  selector: 'app-personas-list',
  templateUrl: './personas-list.component.html',
  styleUrl: './personas-list.component.css'
})
export class PersonasListComponent implements OnInit {
  listadoPersonas: Persona[] = [];

  constructor(private personasService: PersonasService){}

  ngOnInit(): void {
    this.personasService.getPersonasList().subscribe(respuesta => {
      this.listadoPersonas = respuesta.results;
    });

  }

}
