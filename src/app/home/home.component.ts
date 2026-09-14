import { Component, OnInit } from '@angular/core'
import { RadSideDrawer } from 'nativescript-ui-sidedrawer'
import { Application } from '@nativescript/core'
import { Store } from '@ngrx/store'
import { Observable } from 'rxjs'
import { selectProductos } from '../store/reading.selectors'

@Component({
  selector: 'Home',
  templateUrl: './home.component.html',
})
export class HomeComponent implements OnInit {

  productosLeidos$: Observable<any[]>

  constructor(private store: Store) {
    this.productosLeidos$ = this.store.select(selectProductos)
  }

  ngOnInit(): void {
  }

  onDrawerButtonTap(): void {
    const sideDrawer = <RadSideDrawer>Application.getRootView()
    sideDrawer.showDrawer()
  }

  onViewProducts(): void {
    console.log('Ver productos')
  }
}