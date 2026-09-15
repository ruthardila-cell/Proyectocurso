import { Component, OnInit } from '@angular/core'
import { NavigationEnd, Router } from '@angular/router'
import { RouterExtensions } from '@nativescript/angular'
import {
  DrawerTransitionBase,
  RadSideDrawer,
  SlideInOnTopTransition,
} from 'nativescript-ui-sidedrawer'
import { filter } from 'rxjs/operators'
import { Application } from '@nativescript/core'
import { firebase } from '@nativescript/firebase'
import { messaging } from '@nativescript/firebase/messaging'

@Component({
  selector: 'ns-app',
  templateUrl: 'app.component.html',
  standalone: false,
})
export class AppComponent implements OnInit {
  private _activatedUrl: string
  private _sideDrawerTransition: DrawerTransitionBase

  firebaseToken = 'Obteniendo token de Firebase...'

  constructor(
    private router: Router,
    private routerExtensions: RouterExtensions
  ) {}

  ngOnInit(): void {
    this._activatedUrl = '/home'
    this._sideDrawerTransition = new SlideInOnTopTransition()

    this.router.events
      .pipe(filter((event: any) => event instanceof NavigationEnd))
      .subscribe(
        (event: NavigationEnd) =>
          (this._activatedUrl = event.urlAfterRedirects)
      )

    firebase
      .init()
      .then(() => {
        console.log('Firebase inicializado correctamente')

        messaging.initFirebaseMessaging()

        messaging
          .registerForPushNotifications()
          .then(() => {
            console.log('Notificaciones push registradas')

            messaging
              .getCurrentPushToken()
              .then((token) => {
                console.log('TOKEN FIREBASE:', token)
                this.firebaseToken = token
              })
              .catch((error) => {
                console.log('Error obteniendo token:', error)
                this.firebaseToken = 'No se pudo obtener el token'
              })
          })
          .catch((error) => {
            console.log('Error registrando notificaciones:', error)
          })

        messaging.addOnPushTokenReceivedCallback((token) => {
          console.log('NUEVO TOKEN FIREBASE:', token)
          this.firebaseToken = token
        })

        messaging.addOnMessageReceivedCallback((message) => {
          console.log('NOTIFICACION RECIBIDA:', message)
        })
      })
      .catch((error) => {
        console.log('Error al inicializar Firebase:', error)
      })
  }

  get sideDrawerTransition(): DrawerTransitionBase {
    return this._sideDrawerTransition
  }

  isComponentSelected(url: string): boolean {
    return this._activatedUrl === url
  }

  onNavItemTap(navItemRoute: string): void {
    this.routerExtensions.navigate([navItemRoute], {
      transition: {
        name: 'fade',
      },
    })

    const sideDrawer = <RadSideDrawer>Application.getRootView()
    sideDrawer.closeDrawer()
  }
}