import { Component, OnInit } from '@angular/core';
import { CochesService } from '../../services/coches.service';
import { Coche } from '../../interfaces/coche.interfaces';

@Component({
  selector: 'app-coches-list',
  templateUrl: './coches-list.component.html',
  styleUrl: './coches-list.component.css'
})

export class CochesListComponent implements OnInit {
  listadoCoches: Coche[] = [];

  constructor(private cochesService: CochesService){}

  ngOnInit(): void {
    this.cochesService.getCochesList().subscribe(respuesta => {
      this.listadoCoches = respuesta;
    });

  }

}
  