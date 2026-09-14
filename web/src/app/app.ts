import { Component } from '@angular/core';
import { Productos } from './productos/productos';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [Productos],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected title = 'ProyectoCurso Web';
}