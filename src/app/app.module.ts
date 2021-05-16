import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {NavbarComponent} from './navbar/navbar.component';
import {IntroComponent} from './intro/intro.component';
import {DrugRegistrationComponent} from './drug-registration/drug-registration.component';
import {HomeComponent} from './home/home.component';
import {DrugsComponent} from './drugs/drugs.component';
import {ReactiveFormsModule, FormsModule} from '@angular/forms';
import {IvyCarouselModule} from 'angular-responsive-carousel';

@NgModule({
  imports: [
    ReactiveFormsModule,
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    IvyCarouselModule
  ],
  declarations: [
    AppComponent,
    NavbarComponent,
    IntroComponent,
    DrugRegistrationComponent,
    HomeComponent,
    DrugsComponent,
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}
