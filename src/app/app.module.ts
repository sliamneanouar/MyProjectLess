import { BrowserModule } from '@angular/platform-browser';
import {NgModule, Injectable, Component, OnInit, ModuleWithProviders} from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import {Router, Routes, RouterModule} from '@angular/router';

const appRoutes: Routes = [
    {path: 'home', component: HomeComponent}
];
const appRoutingProviders: any[] = [];
const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes, { useHash: true });

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot(appRoutes, { useHash: true })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
