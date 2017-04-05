import { Component } from '@angular/core';
import {Router} from '@angular/router';

@Component({
    selector: 'login',
    templateUrl: './login.template.html',
    styleUrls: ['./login.style.css']
})
export class LoginComponent {

    username: string;
    password: string;

    constructor(private _router: Router) {
    }

}
