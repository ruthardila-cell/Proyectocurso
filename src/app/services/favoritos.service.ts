import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class FavoritosService {

  private favoritos: any[] = [];

  agregarFavorito(producto: any): void {
    const existe = this.favoritos.some(
      favorito => favorito.id === producto.id
    );

    if (!existe) {
      this.favoritos.push(producto);
    }
  }

  obtenerFavoritos(): any[] {
    return this.favoritos;
  }

  esFavorito(producto: any): boolean {
    return this.favoritos.some(
      favorito => favorito.id === producto.id
    );
  }
}