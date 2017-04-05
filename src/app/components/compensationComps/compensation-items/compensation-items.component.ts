
/*******************************************************************************
 * @fileoverview A component that displays the entire pending compensation items
 * @updated Sesha Sai Srivatsav on 04/04/17 [Restructured code]
 * @updated Manasa  on 04/04/17 [Restructured code]
 ******************************************************************************/

import {Component, OnInit} from "@angular/core";
import {Router} from "@angular/router";


@Component({
    selector: 'nyllabs-compensation-items',
    templateUrl: 'compensation-items.template.html',
    styleUrls: ['compensation-items.component.css']
})


export class CompensationItemsComponent implements OnInit {
    completedItems : any[] = [];
    pendingItems : any[] = [];
    allCompensationItems : any[];

    constructor( private _router: Router) {

    }

    ngOnInit() {

        let uwDetails1 = JSON.parse(localStorage.getItem('currentUser'));
        let uwId = (uwDetails1 || {ID: null}).ID;


        this.allCompensationItems = [
            {
                role : "Agent",
                entity: "John Doe",
                compensationAmt: 50000,
                payOutStatus : true,
                reasonForPending : "NA",
                policiesCompensatedFor: 10
            },
            {
                role : "Organization",
                entity: "AMA",
                compensationAmt: 300000,
                payOutStatus : false,
                reasonForPending : "Amount crossed threshold. Needs admin approval",
                policiesCompensatedFor: 100
            },
            {
                role : "Agent",
                entity: "John Wick",
                compensationAmt: 5000,
                payOutStatus : false,
                reasonForPending : "Payment information invalid. Pushed to retrial queue",
                policiesCompensatedFor: 3
            },
            {
                role : "Third Party Agency",
                entity: "Supreme Insurance Agency",
                compensationAmt: 75000,
                payOutStatus : true,
                reasonForPending : "NA",
                policiesCompensatedFor: 25
            },
            {
                role : "Agent",
                entity: "Ryan King",
                compensationAmt: 4000,
                payOutStatus : true,
                reasonForPending : "NA",
                policiesCompensatedFor: 5
            },
            {
                role : "Agent",
                entity: "Bill Cranston",
                compensationAmt: 50000,
                payOutStatus : false,
                reasonForPending : "Amount crossed threshold. Needs admin approval",
                policiesCompensatedFor: 10
            },
            {
                role : "Organization",
                entity: "EMA",
                compensationAmt: 50000,
                payOutStatus : true,
                reasonForPending : "NA",
                policiesCompensatedFor: 34
            }
        ];
        this.getCompletedItems();
        this.getPendingItems();

    }



    payOutComp(compItem){

        console.log(JSON.stringify(compItem));
        for(var j=0;j<this.allCompensationItems.length; j++){
            if(this.allCompensationItems[j].entity === compItem.entity){
                this.allCompensationItems[j].payOutStatus = true;
                console.log(JSON.stringify(this.allCompensationItems[j]));
            }

        }

        this.pendingItems = [];
        this.completedItems = [];
        this.getPendingItems();
        this.getCompletedItems();


    }



    /**
     * Gets all the completed compensation Items
     * @author Manasa Konidena on 3/21/2017
     * @params none
     * @returns All the completed compensation Items
     *
     */

    getCompletedItems(){
        for(var i=0; i<this.allCompensationItems.length;i++){


            var ac = this.allCompensationItems[i];
            if(ac.payOutStatus === true){
              this.completedItems.push(this.allCompensationItems[i]);
            }
        }
    }


    /**
     * Gets all the pending compensation Items
     * @author Manasa Konidena on 3/21/2017
     * @params none
     * @returns All the completed compensation Items
     *
     */

    getPendingItems(){
        for(var i=0; i<this.allCompensationItems.length;i++){
            var ac = this.allCompensationItems[i];
            if(ac.payOutStatus === false){
                this.pendingItems.push(this.allCompensationItems[i]);
            }
        }
    }

}

