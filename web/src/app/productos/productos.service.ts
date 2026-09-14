import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ProductosService {

  getProductos() {
    return [
      {
        nombre: 'Laptop',
        descripcion: 'Computador portátil para trabajo y estudio.',
        precio: 2500000
      },
      {
        nombre: 'Celular',
        descripcion: 'Teléfono inteligente de última generación.',
        precio: 1200000
      },
      {
        nombre: 'Audífonos',
        descripcion: 'Audífonos inalámbricos.',
        precio: 180000
      }
    ];
  }
}
