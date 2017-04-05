import {Routes, RouterModule} from "@angular/router";
import {ModuleWithProviders} from "@angular/core";
import {BillingListComponent} from "./components/billing/allBills/billing-list.component";
import {SearchBillsComponent} from "./components/billing/searchBills/search-bill.component";
import {CompensationBillingComponent} from "./components/root/compensationBilling.component";
import {BillingHomeComponent} from "./components/home/billing-home.component";
import {CompensationItemsComponent} from "./components/compensationComps/compensation-items/compensation-items.component";
import {EntityManagementComponent} from "./components/compensationComps/entity-management/entity-management.component";
import {CompensationRulesComponent} from "./components/compensationComps/compensation-rules/compensation-rules.component";


const APP_ROUTES: Routes = [
    //{ path: 'detail/:id', component: UnderwriterDetailComponent , canActivate: [AuthGuard]},
    //{ path: 'contact-applicant/:id', component: UnderwriterContactComponent, canActivate: [AuthGuard]},
    { path: '', component: BillingHomeComponent},
    { path: 'billing', component: BillingListComponent},
    { path: 'searchBills', component: SearchBillsComponent},
    { path: 'compensationItems', component: CompensationItemsComponent },
   { path: 'entityManagement', component: EntityManagementComponent },
    { path: 'compensationRules', component: CompensationRulesComponent }

];

export const routing: ModuleWithProviders = RouterModule.forRoot(APP_ROUTES);