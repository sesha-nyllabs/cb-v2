/*******************************************************************************
 * @fileoverview A service to get bill details, generate PDF bill and show bill.
 * @author bhupendrasingh on 2/9/17.
 * @updated vrushalkulkarni on 03/13/17
 * @updated sesha on 04/04/17 [restructuring]
 * @updated manasa on 04/04/17 [restructuring]
 ******************************************************************************/


import {Injectable} from "@angular/core";
import 'rxjs/Rx';
import {Http, Headers, Response} from "@angular/http";
import {Observable} from "rxjs/Observable";

@Injectable()


export class BillingService {

    constructor(private _http: Http) {
    }

    /*******************************************************************************
     * The function fetches and displays the customer details with a button
     * to view bill.(all the bills in the table)
     * @returns : BillDetails[]
     * @updated: manasa on 04/04/2017
     ******************************************************************************/


    showAllBills(){
        return this._http.get('https://wqz0bn9bug.execute-api.us-east-1.amazonaws.com/dev/bills')
            .toPromise()
            .then(data => data);
    }



    /*******************************************************************************
     * The function displays error in console, if any.
     ******************************************************************************/

    private handleError(error: Response) {
        console.log("Error has occured", error.status);
        return Observable.throw(error);
    }

}