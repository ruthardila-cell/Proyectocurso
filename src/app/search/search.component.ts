import { Component } from '@angular/core';
import { ProductosService } from '../productos/services/productos.service';

@Component({
selector: 'app-search',
templateUrl: './search.component.html'
})
export class SearchComponent {

textoBusqueda = '';
productos: any[] = [];
productosFiltrados: any[] = [];

constructor(private productosService: ProductosService) {
this.productos = this.productosService.getProductos();
this.productosFiltrados = this.productos;
}

}
