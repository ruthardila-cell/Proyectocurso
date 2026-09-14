import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core'
import { NativeScriptModule, registerElement } from '@nativescript/angular'
import { NativeScriptUISideDrawerModule } from 'nativescript-ui-sidedrawer/angular'
import { PullToRefresh } from '@nativescript-community/ui-pulltorefresh'

import { AppRoutingModule } from './app-routing.module'
import { AppComponent } from './app.component'
import { StoreModule } from '@ngrx/store';
import { readingReducer } from './store/reading.reducer';
import { MinimoCaracteresDirective } from './shared/directives/minimo-caracteres.directive'

registerElement('PullToRefresh', () => PullToRefresh);

@NgModule({
  bootstrap: [AppComponent],
imports: [
  AppRoutingModule,
  NativeScriptModule,
  NativeScriptUISideDrawerModule,

  StoreModule.forRoot({
    reading: readingReducer
  })
],
  declarations: [
    AppComponent,
    MinimoCaracteresDirective
  ],
  schemas: [NO_ERRORS_SCHEMA],
})
export class AppModule {}