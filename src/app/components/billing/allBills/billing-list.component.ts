 /*******************************************************************************
  * @fileoverview A component that displays and handles all the billing
  * functionalities like fetching bills, generating PDF bill and displaying
  * a particular bill.
  * @author bhupendrasingh  on 2/14/17.
  * @updated vrushalkulkarni on 03/14/17
  * @updated Sesha Sai Srivatsav on 04/04/17 [Restructured code]
  * @updated Manasa on 04/04/17 [Restructured code]
//  ******************************************************************************/


import {Router} from "@angular/router";
import {Component, OnInit} from "@angular/core";
import {BillingService} from "../../../services/getBills.service";

@Component({
    selector: 'nyllabs-billing-list',
    templateUrl: 'billing-list.template.html',

    styleUrls: ['billing-list.component.css']
})


export class BillingListComponent implements OnInit{

    generatedBills : any[];
    constructor(private _router: Router, private _billService:BillingService) {
    }


    ngOnInit(){
        this.showAllBills();
    }

    /*******************************************************************************
     * The function fetches and displays the customer details with a button
     * to view bill.(all the bills in the table)
     * @Author : manasa@nyllabs.tech
     * @returns : BillDetails[]
     ******************************************************************************/

    showAllBills() {
        this._billService.showAllBills()
            .then(data=>{

                console.log(data);
                console.log(JSON.parse(data['_body']).Items);
                this.generatedBills = JSON.parse(data['_body']).Items;

            })

    }


}