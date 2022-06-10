import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { Buscar1Component } from './Paginas/buscar1/buscar1.component';
import { BuscarXAutorComponent } from './Paginas/buscar-xautor/buscar-xautor.component';

@NgModule({
  declarations: [
    AppComponent,
    Buscar1Component,
    BuscarXAutorComponent
  ],
  imports: [
    BrowserModule, HttpClientModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
