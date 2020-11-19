import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import {FormsModule} from '@angular/forms';
import { TablamultiplicarComponent } from './components/tablamultiplicar/tablamultiplicar.component';
import { HomeComponent } from './components/ruta/home/home.component';
import { MusicaComponent } from './components/ruta/musica/musica.component';
import { CineComponent } from './components/ruta/cine/cine.component';
import { TelevisionComponent } from './components/ruta/television/television.component';
import {routing, appRoutingProviders} from './app.routing';

@NgModule({
  declarations: [
    AppComponent,
    TablamultiplicarComponent,
    HomeComponent,
    MusicaComponent,
    CineComponent,
    TelevisionComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    routing
  ],
  providers: [appRoutingProviders],
  bootstrap: [AppComponent]
})
export class AppModule { }
