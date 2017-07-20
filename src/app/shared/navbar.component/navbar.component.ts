import { Component, OnInit } from '@angular/core';
import { MaterialBarrelModule } from 'app/shared/modules/material.barrel.module';

@Component({
    moduleId: module.id,
    selector: 'app-navbar',
    templateUrl: 'navbar.component.html',
    styleUrls: ['navbar.component.sass']
})

export class NavbarComponent implements OnInit {
    constructor() { }

    ngOnInit() { }
}
