import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-detalle',
  templateUrl: './detalle.component.html',
  styleUrls: ['./detalle.component.css']
})
export class DetalleComponent implements OnInit {
  lugares:any = [
    {id: 1, plan: 'pagado', cercania: 1, distancia: 1, active: true, nombre: 'Floreria la Gardemia', description: 'Decripsión de este negocio. Más adelante tendremos más información.' },
    {id: 2, plan: 'gratuito', cercania: 1, distancia: 1.8, active: false, nombre: 'Donas la pasadita', description: 'Decripsión de este negocio. Más adelante tendremos más información.' },
    {id: 3, plan: 'gratuito', cercania: 2, distancia: 5, active: true, nombre: 'Veterinaria Huellitas Felices', description: 'Decripsión de este negocio. Más adelante tendremos más información.' },
    {id: 4, plan: 'gratuito', cercania: 3, distancia: 10, active: false, nombre: 'Sushi Sushiroll', description: 'Decripsión de este negocio. Más adelante tendremos más información.' },
    {id: 5, plan: 'pagado', cercania: 3, distancia: 35, active: true, nombre: 'Hotel la Gracia', description: 'Decripsión de este negocio. Más adelante tendremos más información.' },
    {id: 6, plan: 'gratuito', cercania: 3, distancia: 120, active: true, nombre: 'Zapateria el Calvo', description: 'Decripsión de este negocio. Más adelante tendremos más información.' }
  ];
  id: any = null;
  lugar: any = {};
  constructor(private route: ActivatedRoute) {
    console.log(this.route.snapshot.params['id']);
    console.log(this.route.snapshot.queryParams['action']);
    this.id = this.route.snapshot.params['id'];
    this.lugar = this.buscarLugar();
  }

  ngOnInit() {
  }

  buscarLugar() {
    return this.lugares.filter( (lugar) => { return  lugar.id == this.id })[0] || null;
  }

}
