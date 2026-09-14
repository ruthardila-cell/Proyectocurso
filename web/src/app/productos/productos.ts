import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductosService } from './productos.service';

@Component({
  selector: 'app-productos',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './productos.html',
  styleUrl: './productos.css'
})
export class Productos {

  productos: any[] = [];

  constructor(private productosService: ProductosService) {
    this.productos = this.productosService.getProductos();
  }
}