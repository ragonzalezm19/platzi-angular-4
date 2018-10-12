import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-lugares',
  templateUrl: './lugares.component.html',
  styleUrls: ['./lugares.component.css']
})
export class LugaresComponent implements OnInit {
  lugares:any = [
    {id: 1, plan: 'pagado', cercania: 1, distancia: 1, active: true, nombre: 'Floreria la Gardemia' },
    {id: 2, plan: 'gratuito', cercania: 1, distancia: 1.8, active: false, nombre: 'Donas la pasadita' },
    {id: 3, plan: 'gratuito', cercania: 2, distancia: 5, active: true, nombre: 'Veterinaria Huellitas Felices' },
    {id: 4, plan: 'gratuito', cercania: 3, distancia: 10, active: false, nombre: 'Sushi Sushiroll' },
    {id: 5, plan: 'pagado', cercania: 3, distancia: 35, active: true, nombre: 'Hotel la Gracia' },
    {id: 6, plan: 'gratuito', cercania: 3, distancia: 120, active: true, nombre: 'Zapateria el Calvo' }
  ];
  zoom:number = 14;
  lat:number = -33.4365947;
  lng:number = -70.6593313;
  constructor() { }

  ngOnInit() {
    
  }

}
