import { Component, OnInit, Renderer, Renderer2, ViewChild } from '@angular/core';
import { trigger, state, style, animate, transition } from '@angular/animations';

@Component({
    selector: 'app-sidenav',
    templateUrl: 'sidenav.component.html',
    styleUrls: ['sidenav.component.scss'],
    animations: [
        trigger('sidenavState', [

        ])
    ]
})

export class SidenavComponent implements OnInit {
    @ViewChild('sidenav') sidenav;
    private renderer: Renderer2;

    public open(sidenav) {
        this.renderer.setAttribute(sidenav, 'hidden', 'true');
    }

    ngOnInit() {

    }
}
