/*******************************************************************************
 * @fileoverview Populates the side bar
 * @author sesha sai srivatsav on 04/14/17
 * @updated sesha on 04/04/17 [restructuring]
 * @updated manasa on 04/04/17 [restructuring]
 ******************************************************************************/



import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';

@Component({
    selector: 'compensationBilling',
    templateUrl: 'compensationBilling.template.html',
    styleUrls: ['compensationBilling.style.css']
})
export class CompensationBillingComponent implements OnInit{


    navLinks : any[] = [];

    constructor(private _router: Router) {

    }

    ngOnInit(){

        this.navLinks =[
            {route: ['./'], label: 'Home', materialIcon: 'home'},
            {route: ['billing'], label:'Billing', materialIcon: 'credit_card'},
            {route: ['searchBills'], label:'Search Bills', materialIcon: 'credit_card'},
            {route: ['compensationItems'], label:'Compensation Items', materialIcon: 'view_list'  },
            {route: ['entityManagement'],label:'Entity Management', materialIcon: 'label-outline'  },
            {route: ['compensationRules'],label:'Compensation Rules', materialIcon: 'line_style'  }
        ];


    }
}