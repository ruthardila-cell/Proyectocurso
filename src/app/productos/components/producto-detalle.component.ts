import { Component } from '@angular/core';
import { isAndroid } from '@nativescript/core';

@Component({
  selector: 'app-producto-detalle',
  templateUrl: './producto-detalle.component.html',
  standalone: false,
})
export class ProductoDetalleComponent {

  mensajeAndroid = '';

  constructor() {
    if (isAndroid) {
      this.mensajeAndroid = 'Esta variable solo se asigna en Android';
    }
  }
}