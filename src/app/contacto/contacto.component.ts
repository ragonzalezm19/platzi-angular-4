import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-contacto',
  templateUrl: './contacto.component.html',
  styleUrls: ['./contacto.component.css']
})
export class ContactoComponent implements OnInit {
  zoom: number = 14;
  lat: number = -33.4365947;
  lng: number = -70.6593313;
  empresa: any = {
    descripcion: 'Descripción de la empresa.',
    direccion: 'Direccion empresa.',
    correo: 'contacto.anrweb@gmail.com',
    telefono: '+56 9 9311 1866',
  }

  constructor() { }

  ngOnInit() {
  }

}
