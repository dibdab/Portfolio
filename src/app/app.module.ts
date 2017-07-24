import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import 'hammerjs';
import { MdIconRegistry } from '@angular/material';

import { AppComponent } from './app.component';

import { AppRoutingModule } from './app-routing.module';
import { CoreModule } from './core/core.module';
import { AboutMeModule } from './aboutme/aboutme.module';

import { PageNotFoundComponent } from './page-not-found.component/page-not-found.component';

@NgModule({
    declarations: [
        AppComponent,
        PageNotFoundComponent
    ],
    imports: [
        BrowserModule,
        BrowserAnimationsModule,
        CoreModule,
        AboutMeModule,
        AppRoutingModule,
    ],
    bootstrap: [AppComponent]
})
export class AppModule {
    constructor(mdIconRegistry: MdIconRegistry) {
        mdIconRegistry.registerFontClassAlias('fontawesome', 'fa');
    }
}
