import {NgModule, CUSTOM_ELEMENTS_SCHEMA} from '@angular/core';
import { BrowserModule }  from '@angular/platform-browser';
import { AmChartsModule } from "amcharts3-angular2";
import {NYLSharedModule} from "./shared/nylShared.module";
import {HashLocationStrategy, LocationStrategy} from "@angular/common";
import {routing} from "./app.routing";

import {LoginComponent} from "./components/login/login.component";

import {CompensationBillingComponent} from "./components/root/compensationBilling.component";
import {SearchBillsComponent} from "./components/billing/searchBills/search-bill.component";
import {BillingListComponent} from "./components/billing/allBills/billing-list.component";
import {BillingHomeComponent} from "./components/home/billing-home.component";
import {BillingService} from "./services/getBills.service";
import {CompensationItemsComponent} from "./components/compensationComps/compensation-items/compensation-items.component";
import {CompensationRulesComponent} from "./components/compensationComps/compensation-rules/compensation-rules.component";
import {EntityManagementComponent} from "./components/compensationComps/entity-management/entity-management.component";
import {FormsModule} from "@angular/forms";


@NgModule({
  imports: [
    BrowserModule,
    AmChartsModule,
    NYLSharedModule,
    routing
  ],
  declarations: [
      LoginComponent,
      CompensationBillingComponent,
      BillingListComponent,
      SearchBillsComponent,
      BillingHomeComponent,
      CompensationItemsComponent,
      CompensationRulesComponent,
      EntityManagementComponent
  ],
  providers: [
    {provide: LocationStrategy, useClass: HashLocationStrategy},
      BillingService
  ],
  bootstrap: [ CompensationBillingComponent ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class AppModule { }
