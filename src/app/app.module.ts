import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppRoutingModule, routedComponents } from './app-routing.module';

// Imports for loading & configuring the in-memory web api
import { InMemoryWebApiModule } from 'angular-in-memory-web-api';
import { InMemoryDataService } from './shared/services/in-memory-data.service';

import { AppComponent } from './app.component';
import { HeroMiniDetailComponent, HeroSearchComponent } from './heroes.component';
import { SidebarComponent } from './shared/sidebar.component/sidebar.component';
import { HeroService } from 'app/shared/services/hero.service';

@NgModule({
  declarations: [
    AppComponent,
    routedComponents,
    HeroMiniDetailComponent,
    HeroSearchComponent,
    SidebarComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    InMemoryWebApiModule.forRoot(InMemoryDataService),
    AppRoutingModule
  ],
  providers: [HeroService],
  bootstrap: [AppComponent]
})
export class AppModule { }
