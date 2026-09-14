import { Injectable } from '@angular/core';
import { Http } from '@nativescript/core';
import { API_CONFIG } from './api-config';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  buscarProductos(texto: string): Promise<any[]> {
    const url =
      `${API_CONFIG.baseUrl}/productos?buscar=${encodeURIComponent(texto)}`;

    return Http.request({
      url: url,
      method: 'GET'
    }).then(response => {
      return response.content.toJSON();
    });
  }
}