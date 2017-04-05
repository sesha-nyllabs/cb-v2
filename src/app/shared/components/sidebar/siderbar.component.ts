import {Component, Input} from '@angular/core';
import {Router} from "@angular/router";
import {NavLink} from "../../entities/navLink";

@Component({
    selector: 'sidebar',
    templateUrl: 'sidebar.template.html',
    styleUrls: ['sidebar.style.css']
})
export class SidebarComponent {

    @Input() navLinks: NavLink[];

    constructor (private _router: Router) {}

}
