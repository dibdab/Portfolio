import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import 'hammerjs';

import { AppRoutingModule, routedComponents } from './app-routing.module';

// Imports for loading & configuring the in-memory web api
import { InMemoryWebApiModule } from 'angular-in-memory-web-api';
import { InMemoryDataService } from './shared/services/in-memory-data.service';

import { AppComponent } from './app.component';
import { MaterialBarrelModule } from 'app/shared/modules/material.barrel.module';
import { NavbarComponent } from './shared/components/navbar.component/navbar.component';

@NgModule({
  declarations: [
    AppComponent,
    routedComponents,
    NavbarComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    InMemoryWebApiModule.forRoot(InMemoryDataService),
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialBarrelModule
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
