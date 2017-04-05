/*******************************************************************************
 * @fileoverview Controller that deals with compensation elements
 * @author Mukul Bichkar  on 2/14/17.
 * @updated vrushalkulkarni on 03/14/17
 * @updated Sesha Sai Srivatsav on 03/20/17
 * @updated Sesha Sai Srivatsav on 04/04/17 [Restructured code]
 * @updated Manasa  on 04/04/17 [Restructured code]
 ******************************************************************************/

import {Component, OnInit} from "@angular/core";
import {Router} from "@angular/router";
import {DialogModule, Header, Footer} from 'primeng/primeng';

// for drop down
import {SelectItem} from "primeng/components/common/api";


@Component({
    selector: 'nyllabs-compensation-rules',
    templateUrl: 'compensation-rules.template.html',

    styleUrls: ['compensation-rules.component.css']
})


export class CompensationRulesComponent implements OnInit {

    displayButton: boolean;
    entity : SelectItem[];
    ruleYears : any;
    compensationRules : any[] ;
    display : boolean =false;
    currentRule: any = {};


    constructor(private _router: Router) {

    }

    ngOnInit() {
        let uwDetails1 = JSON.parse(localStorage.getItem('currentUser'));
        let uwId = (uwDetails1 || {ID: null}).ID;

        this.displayButton = false;
        this.ruleYears = [{yrName : "1st Year Premium",yr: 1, show : true}];
        this.dropDownEntityType();
        this.getCompensationRules();
    }

    /*********************************************************************************
     * @author Sesha Sai Srivatsav<sesha@nyllabs.tech>
     * This function populates the sample data for drop down
     * @returns : list of entities
     *
     ********************************************************************************/
    dropDownEntityType(){
        this.entity = [
            {label: 'Select comp entity', value: null},
            {label: 'Agent', value: {id: 1, name: 'Agent'}},
            {label: 'AMA', value: {id: 2, name: 'AMA'}},
            {label: 'iOS App', value: {id: 3, name: 'iOS App'}},

        ];
    }



    /*********************************************************************************
     * @author Sesha Sai Srivatsav<sesha@nyllabs.tech>
     * This function deletes a specific rule
     * @returns :
     ********************************************************************************/
    deleteRule(rule){
        console.log("rulename " +JSON.stringify(rule));

        for(var i = 0; i < this.compensationRules.length; i ++){
            if(this.compensationRules[i].ruleId == rule.ruleId){
                this.compensationRules.splice(i, 1);
            }
        }

    }


    /*********************************************************************************
     * @author Sesha Sai Srivatsav<sesha@nyllabs.tech>
     * T
     * @returns : Customer[]
     ********************************************************************************/
    showDialog(rule) {

        for(var i = 0; i < this.compensationRules.length; i ++){
            if(this.compensationRules[i].ruleId == rule.ruleId){
                this.currentRule = this.compensationRules[i];
            }
        }

        this.display = true;
    }

    /*********************************************************************************
     * @author Sesha Sai Srivatsav<sesha@nyllabs.tech>
     * updateRule : will update a given rule
     ********************************************************************************/
    updateRule( ruleId, ruleName, entity){


        for(var i = 0; i < this.compensationRules.length; i ++){
            if(this.compensationRules[i].ruleId == ruleId){
                this.compensationRules[i].ruleName = ruleName;
                this.compensationRules[i].entity = entity;
            }
        }

        this.display = false;

    }

    /*********************************************************************************
     * @author Sesha Sai Srivatsav<sesha@nyllabs.tech>
     * updateRule : This functions gets me all the rules for display on the table
     ********************************************************************************/
    getCompensationRules(){

        this.compensationRules = [
            {
                ruleId : "123",
                entity : "AMA",
                ruleName : "Fixed_AMA_Rule",
                premium : [{
                    yr: 1,
                    premPercentage : "100",
                    show : true
                }]
            },
            {
                ruleId : "234",
                entity : "iOS app",
                ruleName : "iOS_for_NYL",
                premium : [{
                    yr: 1,
                    premPercentage : "90",
                    show : true
                },
                    {
                        yr: 2,
                        premPercentage : "10",
                        show : true
                    }
                ]
            }
        ];

    }

    /*********************************************************************************
     * @author Sesha Sai Srivatsav<sesha@nyllabs.tech>
     * updateRule : This functions creates a new Rule
     ********************************************************************************/
    createRule(entity, rule){
        var newRule = {
            entity : entity.name,
            ruleName : rule,
            premium : this.ruleYears,
            ruleId : "" + new Date().getTime()

        };

        this.compensationRules.push(newRule);
    }


    /*********************************************************************************
     * @author Sesha Sai Srivatsav<sesha@nyllabs.tech>
     * This functions adds new input fields for creating  a new compensation amount
     ********************************************************************************/
    addYear(percentage){
        var len = this.ruleYears.length;
        // var premPercentageArray = [];


        this.ruleYears[len - 1].premPercentage = percentage;
        this.ruleYears[len - 1].show = false;



        if(len == 1){
            this.ruleYears.push({yrName : len + 1 + "nd Year Premium", show : true, yr: len + 1});

        } else if(len == 2){
            this.ruleYears.push({yrName : len + 1 + "rd Year Premium", show : true, yr: len + 1});
        } else {

            this.ruleYears.push({yrName : len + 1 + "th Year Premium", show : true, yr: len + 1});
        }
    }



}
