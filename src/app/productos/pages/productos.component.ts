import { Component } from '@angular/core';
import { RouterExtensions } from '@nativescript/angular';
import { action } from '@nativescript/core';
import { ProductosService } from '../services/productos.service';

@Component({
  selector: 'app-productos',
  templateUrl: './productos.component.html',
  standalone: false,
})
export class ProductosComponent {

  productos: any[] = [];

  constructor(
    private productosService: ProductosService,
    private routerExtensions: RouterExtensions
  ) {
    this.productos = this.productosService.getProductos();
  }

  onProductoTap(producto: any) {
    this.routerExtensions.navigate(['/productos/detalle'], {
      queryParams: {
        nombre: producto.nombre
      }
    });
  }

  seleccionarCategoria(producto: any) {
    action(
      'Selecciona una categoría',
      'Cancelar',
      ['Tecnología', 'Hogar', 'Accesorios']
    ).then((resultado) => {

      if (resultado && resultado !== 'Cancelar') {
        producto.categoria = resultado;
      }

    });
  }

  onProductoLongPress(producto: any) {
    console.log('Pulsación larga: ' + producto.nombre);
  }

  animarBoton(args: any) {
    const boton = args.object;

    boton.animate({
      rotate: 360,
      duration: 500
    });
  }

  onPullToRefresh(args: any) {
    const refresh = args.object;

    const nuevosProductos = [
      {
        nombre: 'Tablet',
        descripcion: 'Tablet para estudio y entretenimiento.',
        precio: 900000
      },
      {
        nombre: 'Teclado',
        descripcion: 'Teclado inalámbrico para computador.',
        precio: 150000
      },
      {
        nombre: 'Mouse',
        descripcion: 'Mouse inalámbrico ergonómico.',
        precio: 80000
      }
    ];

    const nuevo =
      nuevosProductos[Math.floor(Math.random() * nuevosProductos.length)];

    this.productos.push(nuevo);

    refresh.refreshing = false;
  }
}