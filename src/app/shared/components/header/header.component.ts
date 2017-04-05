import {Component, Input} from '@angular/core';
import {Router} from "@angular/router";

@Component({
    selector: 'header',
    templateUrl: 'header.template.html',
    styleUrls: ['header.style.css']
})
export class HeaderComponent {


    constructor (private _router: Router) {}

}
