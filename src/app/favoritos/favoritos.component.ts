import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { FavoritosService } from '../services/favoritos.service';
import { leerAhora } from '../store/reading.actions';

@Component({
  selector: 'app-favoritos',
  templateUrl: './favoritos.component.html',
  standalone: false,
})
export class FavoritosComponent implements OnInit {

  favoritos: any[] = [];

  constructor(
    private favoritosService: FavoritosService,
    private store: Store
  ) {}

  ngOnInit(): void {
    this.favoritos = this.favoritosService.obtenerFavoritos();
  }

  leerProducto(producto: any): void {
    this.store.dispatch(leerAhora({ producto }));
  }
}