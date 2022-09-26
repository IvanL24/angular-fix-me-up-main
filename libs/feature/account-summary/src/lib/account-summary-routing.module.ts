import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { RouterModule } from "@angular/router";
import { AccountSummaryComponent } from "./account-summary/account-summary.component";

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    RouterModule.forChild([
      {path: '', pathMatch: 'full', component: AccountSummaryComponent },
      {path: 'account/:id', pathMatch:'full', component: AccountSummaryComponent}
    ]),
  ],
  declarations: [],
  exports: [RouterModule]
})
export class AccountSummaryRoutingModule { }
