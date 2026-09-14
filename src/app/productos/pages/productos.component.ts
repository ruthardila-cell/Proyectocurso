import { Component } from '@angular/core';
import { ProductosService } from '../services/productos.service';

@Component({
  selector: 'app-productos',
  templateUrl: './productos.component.html'
})
export class ProductosComponent {

  productos: any[] = [];

  constructor(private productosService: ProductosService) {
    this.productos = this.productosService.getProductos();
  }
}