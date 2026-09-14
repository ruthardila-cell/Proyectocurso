import { NgModule } from '@angular/core';
import { Routes } from '@angular/router';
import { NativeScriptRouterModule } from '@nativescript/angular';

import { ProductosComponent } from './pages/productos.component';
import { ProductoDetalleComponent } from './components/producto-detalle.component';

const routes: Routes = [
  {
    path: '',
    component: ProductosComponent
  },
  {
    path: 'detalle',
    component: ProductoDetalleComponent
  }
];

@NgModule({
  imports: [NativeScriptRouterModule.forChild(routes)],
  exports: [NativeScriptRouterModule]
})
export class ProductosRoutingModule {}