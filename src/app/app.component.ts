import { Component } from '@angular/core';
import { MainPageComponent } from './main-page/main-page.component';

/**
 * AppComponent
 *
 * Root-Komponente der Anwendung. Bindet MainPageComponent direkt ein,
 * ganz ohne NgModule.
 */
@Component({
  selector: 'app-root',
  standalone: true,
  imports: [MainPageComponent],
  template: `<app-main-page></app-main-page>`,
})
export class AppComponent {}
