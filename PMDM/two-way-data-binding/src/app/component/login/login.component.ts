import { Component } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
  //1.Property binding
  valoracion = 5;
  imgUrl = "https://edicom.mx/dam/jcr:1d5f0f0a-a59b-46a0-88e9-3f653ba3fc3c/mercadona_integration.png"
  //2.Event binding
  showUserInfo() {
    alert(`Nombre de usuario: ${this.nombre} `);	
  }
  //3.Two-way data binding
  nombre = 'Carlos';

}
