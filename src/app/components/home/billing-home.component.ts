/*******************************************************************************
 * @fileoverview A component that displays amCharts on the Home page of the
 * portal. Currently it is showing all static data.
 * //TO DO: Figure out how amCharts work and how to load the data dynamically
 * in these charts.
 * @updated vrushalkulkarni on 03/14/17
 * @updated sesha on 04/02/17 [Restructuring]
 * @updated manasa on 04/02/17 [Restructuring]
 ******************************************************************************/

// import {Router} from "@angular/router";
// import {Component} from "@angular/core";
//
//
// @Component({
//     selector: 'nyllabs-billing-home',
//     templateUrl: 'billing-home.template.html'
// })
//
// export class BillingHomeComponent {
//
//     constructor(private _router: Router) {
//
//
//     }
//
// }


////////////////////////////////////////////////////////
/*******************************************************************************
 * @fileoverview A component that displays amCharts on the Home page of the
 * portal. Currently it is showing all static data.
 * //TO DO: Figure out how amCharts work and how to load the data dynamically
 * in these charts.
 * @updated vrushalkulkarni on 03/14/17
 ******************************************************************************/


import {Component, ElementRef, OnInit, Input} from '@angular/core';
import {SelectItem} from "primeng/components/common/api";

//import ENV from "../../../env";
//const BASE_URL = ENV.BASE_URL;
import {GrowlModule, Message, DialogModule} from 'primeng/primeng';
import {Router} from '@angular/router';

@Component({
    selector: 'nyllabs-billing-home',
    templateUrl: 'billing-home.template.html'
})

export class BillingHomeComponent implements OnInit {
    title: string = 'Welcome to Policy Admin Dashboard!';
    currentUser: any = {};
    notification: string;
    lineChartConfig: any;
    cities: SelectItem[];
    chartData: any;

    uwNotification: Message[] = [];
    displayDialog: boolean = false;
    msg: String;
    sizeOfNotif: Number;
    display: boolean = false;

    billGeneratedChart: any;
    lapseNoticesChart: any;
    policiesSold: any;
    amountCompensated: any;
    height: number = 250;
    charts: any[];


    constructor(private _elementRef: ElementRef,
                private _router: Router) {

        this.billGeneratedChart = {
            type: "line",
            //title: "Payments via Different Methods",
            data: {
                labels: ['Jan', 'Feb', 'March', 'April', 'May', 'June'],
                datasets: [
                    {
                        label: 'PayPal',
                        data: [36, 46, 50, 52, 50, 46],
                        fill: false,
                        borderColor: '#4bc0c0'
                    },
                    {

                        label: 'Apple Pay',
                        data: [20, 23, 28, 38, 46, 52],
                        fill: false,
                        borderColor: '#565656',
                    },
                    {

                        label: 'Credit Card',
                        data: [55, 56, 53, 48, 42, 35],
                        fill: false,
                        borderColor: '#1E88E5',
                    },
                ]
            },
        };

        this.lapseNoticesChart = {
            type: "bar",
            //title: "Lapse notices",
            data: {
                labels: ['Jan', 'Feb', 'March', 'April', 'May', 'June', 'July', 'August', 'Sept', 'October', 'November', 'Dec'],
                datasets: [
                    {
                        label: 'No. of Notices',
                        data: [5, 9, 8, 1, 6, 5, 4, 0, 9, 3, 10, 12],
                        fill: false,
                        borderColor: '#1E88E5',
                        backgroundColor: ['#42A5F5']
                    }
                ]
            },
        };


        this.policiesSold = {
            type: "bar",
            //title: "Policies sold by each entity",
            data: {
                labels: ['Jan', 'Feb', 'March', 'April', 'May', 'June'],
                datasets: [
                    {
                        label: 'Agents',
                        backgroundColor: ['#42A5F5'],
                        fill: false,
                        borderColor: '#1E88E5',
                        data: [65, 59, 80, 81, 56, 55]
                    },
                    {
                        label: 'AMA',
                        backgroundColor: ['#9CCC65'],
                        fill: false,
                        borderColor: '#7CB342',
                        data: [28, 48, 40, 19, 86, 27]
                    },
                    {
                        label: 'Other',
                        backgroundColor: ['#9932CC'],
                        fill: false,
                        borderColor: '#7CB342',
                        data: [18, 8, 14, 19, 16, 27]
                    }
                ]
            },
        };


        this.amountCompensated = {
            type: "pie",
            //title: "Amount compensated(per 1000 USD)",
            data: {
                labels: ['Agents', 'AMA', 'Other'],
                datasets: [
                    {
                        data: [300, 50, 100],
                        fill: false,
                        backgroundColor: [
                            "#FF6384",
                            "#36A2EB",
                            "#FFCE56"
                        ],
                        hoverBackgroundColor: [
                            "#FF6384",
                            "#36A2EB",
                            "#FFCE56"
                        ]
                    }]
            },
        };

        this.charts = [this.billGeneratedChart, this.lapseNoticesChart, this.policiesSold, this.amountCompensated ];
    }

    ngOnInit(): void {

        let uwDetails = JSON.parse(localStorage.getItem('currentUser'));
        let uwId = (uwDetails || {ID: null}).ID;




        console.log(this.charts);
    }

    showDialog() {
        console.log("hey");
        this.display = true;
    }

    onChartDataSelect(event: any): void {
        console.log(event);
    }


    onClickNotif() {
        let uwDetails = JSON.parse(localStorage.getItem('currentUser'));
        let uwId = uwDetails.ID;
        this._router.navigate(['underwriter/msg-center']);
    }
}
