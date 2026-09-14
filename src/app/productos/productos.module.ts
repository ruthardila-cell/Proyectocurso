import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core';
import { NativeScriptCommonModule } from '@nativescript/angular';

import { ProductosRoutingModule } from './productos-routing.module';
import { ProductosComponent } from './pages/productos.component';
import { ProductoDetalleComponent } from './components/producto-detalle.component';

@NgModule({
    declarations: [
        ProductosComponent,
        ProductoDetalleComponent
    ],
    imports: [
        NativeScriptCommonModule,
        ProductosRoutingModule
    ],
    schemas: [NO_ERRORS_SCHEMA]
})
export class ProductosModule {}