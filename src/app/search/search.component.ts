import { Component } from '@angular/core';
import { ApiService } from '../services/api.service';
import { FavoritosService } from '../services/favoritos.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html'
})
export class SearchComponent {

  textoBusqueda = '';
  productos: any[] = [];
  productosFiltrados: any[] = [];

  constructor(
    private apiService: ApiService,
    private favoritosService: FavoritosService
  ) {}

  buscarProductos() {
    this.apiService.buscarProductos(this.textoBusqueda)
      .then(productos => {
        this.productosFiltrados = productos;
      })
      .catch(error => {
        console.log('Error al consultar la API:', error);
        this.productosFiltrados = [];
      });
  }

  guardarFavorito(producto: any): void {
    this.favoritosService.agregarFavorito(producto);
  }
}