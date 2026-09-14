import { Component, OnInit } from '@angular/core';
import { ApplicationSettings } from '@nativescript/core';
import { RadSideDrawer } from 'nativescript-ui-sidedrawer';
import { Application } from '@nativescript/core';

@Component({
  selector: 'Settings',
  templateUrl: './settings.component.html',
})
export class SettingsComponent implements OnInit {

  nombreUsuario = '';

  constructor() {}

  ngOnInit(): void {
    this.nombreUsuario =
      ApplicationSettings.getString('nombreUsuario', '');
  }

  guardarNombre(): void {
    ApplicationSettings.setString(
      'nombreUsuario',
      this.nombreUsuario
    );
  }

  onDrawerButtonTap(): void {
    const sideDrawer = <RadSideDrawer>Application.getRootView();
    sideDrawer.showDrawer();
  }
}