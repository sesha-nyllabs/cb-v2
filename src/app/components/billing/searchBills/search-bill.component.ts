/*******************************************************************************
 * @fileoverview A component that displays and handles all the billing
 * functionalities like fetching bills, generating PDF bill and displaying
 * a particular bill.
 * @author bhupendrasingh  on 2/14/17.
 * @updated vrushalkulkarni on 03/14/17
 * @updated Sesha Sai Srivatsav on 04/04/17 [Restructured]
 * @updated vrushalkulkarni on 04/04/17 [Restructured]
 ******************************************************************************/

import {Component, OnInit} from "@angular/core";
import {Router} from "@angular/router";
import {BillingService} from "../../../services/getBills.service";
import {Message} from 'primeng/primeng';

@Component({
    selector: 'nyllabs-billing-list',
    templateUrl: 'search-bill.template.html',
    styleUrls: ['search-bill.component.css']
})


export class SearchBillsComponent implements OnInit {
    generatedBills: any;
    msgs: Message[] = [];
    show: boolean = false;
    display: boolean = false;



    constructor(private _billService:BillingService, private _router: Router) {
    }


    ngOnInit() {

    }


    searchPolicy(){
        this.show = true;
    }


    /*******************************************************************************
     * The function displays a success message dialog box when generate bill button
     * is clicked.
     * @returns : Message[]
     * @Author: vrushal@nyllabs.tech
     ******************************************************************************/

    showSuccess() {
        this.msgs = [];
        this.msgs.push({severity:'success', summary:'Success', detail:'Email Successfully sent'});
    }


    /*******************************************************************************
     * The function opens a PDF bill in new tab.
     * @param: bill
     * @Author: vrushal@nyllabs.tech
     * //TO DO: opening bill using modal dialog box in the same window.
     ******************************************************************************/

    openBill() {
            window.open("https://s3.amazonaws.com/compensation-billing-team%2Fbills/PLAP06fso1g1490908483521.pdf");
    }


    /*******************************************************************************
     * The function
     * @returns :
     * @Author:
     ******************************************************************************/
    showDialog(){
        this.display=true;
    }

}
