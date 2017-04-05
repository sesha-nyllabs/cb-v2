/*******************************************************************************
 * @fileoverview A component that in which basic crud operations for entity
 * management are implemented.
 * @author vrushalkulkarni on 03/14/17
 * @updated sesha on 04/04/17 [restructuring]
 * @updated manasa on 04/04/17 [restructuring]
 ******************************************************************************/

import {Component, OnInit} from "@angular/core";
import {Router} from "@angular/router";


import {DataTableModule,SharedModule} from 'primeng/primeng';
import {DropdownModule} from 'primeng/primeng';
import {SelectItem} from 'primeng/primeng';
import {InputTextModule} from 'primeng/primeng';
import {FieldsetModule} from 'primeng/primeng';
import {PanelModule} from 'primeng/primeng';
import {ButtonModule} from 'primeng/primeng';
import {DataGridModule} from 'primeng/primeng';
import {InputTextareaModule} from 'primeng/primeng';
import {DialogModule} from 'primeng/primeng';


@Component({
    selector: 'nyllabs-entity-management',
    templateUrl: 'entity-management.template.html',

    styleUrls: ['entity-management.component.css']
})


export class EntityManagementComponent implements OnInit {

    entityType : SelectItem[]= [
        {label: 'Select Entity', value: null},
        {label:'Agent', value:{id:1, name: 'Agent'}},
        {label:'Organization', value:{id:2, name: 'Organization'}},
        {label:'Third Party', value:{id:3, name: 'Third Party Agency'}}
    ];
    rules : SelectItem[]= [
        {label: 'Select Rule', value: null},
        {label:'Complex Calculation', value:{id:1, name: 'Complex Calculation'}},
        {label:'Basic Calculation', value:{id:2, name: 'Basic Calculation'}}
    ];
    displayDialog: boolean;
    entity: any;
    selectedEntity: any;
    roleType : String ;
    ruleType : String;
    newEntity: boolean;

    entities: any[]= [
        {"rule": "Basic Calculation", "name": "John Parker", "role": "Agent", "address":"245, 5th Avenue,NY-10016", "bname":"BOFA", "acno":"7205912895", "routingno":"215642"},
        {"rule": "Complex Calculation", "name": "AMA", "role": "Organization", "address":"212, 5th Avenue,NY-10016", "bname":"Chase", "acno":"8955912895", "routingno":"235642"},
        {"rule": "Basic Calculation", "name": "Kathy Jones", "role": "Agent", "address":"192, 6th Avenue,NY-10016", "bname":"Discover", "acno":"3205934898", "routingno":"983642"},
        {"rule": "Basic Calculation", "name": "Chris Cairns", "role": "Agent", "address":"250, 7th Avenue,NY-10016", "bname":"BOFA", "acno":"7303512890", "routingno":"654642"},
        {"rule": "Basic Calculation", "name": "Henry Obloga", "role": "Agent", "address":"245, 5th Avenue,NY-10016", "bname":"BOFA", "acno":"7205912895", "routingno":"215642"},
        {"rule": "Complex Calculation", "name": "CMA", "role": "Organization", "address":"212, 5th Avenue,NY-10016", "bname":"Chase", "acno":"8955912895", "routingno":"235642"},
        {"rule": "Basic Calculation", "name": "Jimmy Jones", "role": "Agent", "address":"192, 6th Avenue,NY-10016", "bname":"Discover", "acno":"3205934898", "routingno":"983642"},
        {"rule": "Basic Calculation", "name": "Kathy Jones", "role": "Agent", "address":"250, 7th Avenue,NY-10016", "bname":"BOFA", "acno":"7303512890", "routingno":"654642"},

    ];

    display: boolean = false;

    displayRole: boolean = false;

    allRoles: any[];
    currentRole : any = {
        roleId : "dummy",
        roleName : "dummy",
        roleDesc : "dummy"
    };



    constructor(private _router: Router) {

    }


    ngOnInit() {

        this.getRoles();

    }

    showDialogToAdd()
    {
        this.newEntity = true;
        this.entity = {};
        this.displayDialog = true;
    }

    showDialog() {
        this.display = true;
    }

    addEntity(role,name,address,bname,acno,routingno,rule)
    {
        let newEntity = {
            rule : rule.name,
            name : name,
            role : role.name,
            address : address,
            bname : bname,
            acno : acno,
            routingno : routingno
        };

        this.entities.push(newEntity);
    }


    save() {
        if(this.newEntity)
            this.entities.push(this.entity);
        else
            this.entities[this.findSelectedEntityIndex()] = this.entity;

        this.entity = null;
        this.displayDialog = false;
    }

    delete() {
        this.entities.splice(this.findSelectedEntityIndex(), 1);
        this.entity = null;
        this.displayDialog = false;
    }

    onRowSelect(event) {
        this.newEntity = false;
        this.entity = this.cloneEntity(event.data);
        this.displayDialog = true;
    }

    cloneEntity(c: any): any {
        let entity = {};
        for(let prop in c) {
            entity[prop] = c[prop];
        }
        return entity;
    }

    findSelectedEntityIndex(): number {
        return this.entities.indexOf(this.selectedEntity);
    }




    /**
     * @author Manasa <manasa@nyllabs.tech>
     *     This function shows the dialog for Editing Compensation
     *     @param   Index of the role for which the dialog needs to be opened
     *     @returns [empty] none
     *
     */
    showDialog1(roleId) {

        for(var i = 0; i < this.allRoles.length; i ++){
            if(this.allRoles[i].roleId == roleId){
                this.currentRole = this.allRoles[i];
            }
        }

        this.displayRole = true;
    }


    /**
     * @author Manasa <manasa@nyllabs.tech>
     *     This function adds a new role to the existing roles in compensation
     *     @param   Role Name and Role Description
     *     @returna [empty] none
     *
     */
    addRole(name, description){
        console.log(name);
        let newRole = {
            roleName : name,
            roleDesc : description,
            roleId : "45632"
        };

        this.allRoles.push(newRole);
    }


    /**
     * @author Manasa <manasa@nyllabs.tech>
     *     This function updates an incoming role
     *     @param   Index of the Role, Role Name and Role Description
     *     @returna [empty] none
     *
     */
    updateRole(roleId, name, description){
        console.log(name + description);

        for(var i = 0; i < this.allRoles.length; i ++){
            if(this.allRoles[i].roleId == roleId){
                this.allRoles[i].roleName = name;
                this.allRoles[i].roleDesc = description;
            }
        }
        this.displayRole = false;
    }


    /**
     * @author Manasa <manasa@nyllabs.tech>
     *     This function deletes incoming role
     *     @param   Index of the Role
     *     @returna [empty] none
     *
     */
    deleteRole(roleId){
        for(var i = 0; i < this.allRoles.length; i ++){
            if(this.allRoles[i].roleId == roleId){
                this.allRoles.splice(i, 1);
            }
        }

        this.displayRole = false;
    }



    /**
     * @author Manasa <manasa@nyllabs.tech>
     *     This function returns all the roles present in the Compensation
     *     @param (empty) input none
     *     @returns Role[]
     */

    getRoles(){

        this.allRoles =
            [
                {
                    roleId : "12345",
                    roleName : "Agent",
                    roleDesc : "Agents are NYL's own agents or third party agents"
                },
                {
                    roleId : "23456",
                    roleName : "Organization",
                    roleDesc : "Organizations get policy business for us."
                },
                {
                    roleId : "34567",
                    roleName : "Third Party Agency",
                    roleDesc : "Third Party agencies lend us resources as agents who sell policies for us"
                }

            ];


    }


}


