import {Routes, RouterModule} from '@angular/router'; 
import {ModuleWithProviders} from '@angular/core';

import {HomeComponent} from './../app/components/ruta/home/home.component';
import {CineComponent} from './../app/components/ruta/cine/cine.component';
import {MusicaComponent} from './components/ruta/musica/musica.component';
import {TelevisionComponent} from './components/ruta/television/television.component';

const appRoutes : Routes =[
    {path: "", component: HomeComponent},
    {path: "home", component: HomeComponent},
    {path:"musica", component: MusicaComponent},
    {path:"cine",component:CineComponent},
    {path:"television", component:TelevisionComponent}
];

export const appRoutingProviders: any[] = [];
export const routing: ModuleWithProviders = 
RouterModule.forRoot(appRoutes);

