/* eslint-disable @nrwl/nx/enforce-module-boundaries */
/** 
 * TODO: 10. Asynchronous Programming (RxJS)
 * TODO: 13. Angular (NX) Architecture
*/
import { Component, NgModule, OnInit } from '@angular/core';
// import { FormsModule } from '@angular/forms';
import { Account } from 'libs/shared/services/src/lib/account';
import { AccountService } from 'libs/shared/services/src/lib/account.service';
import { Observable, of } from 'rxjs';

@Component({
  selector: 'sum-account-summary',
  templateUrl: './account-summary.component.html',
  styleUrls: ['./account-summary.component.scss'],
})

// @NgModule ({
//   declarations:[AccountService],
//   imports: [FormsModule],
//   providers:[],
//   bootstrap: [AppComponent]
// })

export class AccountSummaryComponent implements OnInit {
  accounts$: Observable<Account[]> = of([]);
  constructor(private accountService: AccountService) {}
  accounts: Account[] = [];
  accountsFilter = '';
  
  options=[ {name:'None', value:''},
            {name:'CAD', value:'cad'},
            {name:'USD', value:'usd'}];

  ngOnInit(): void {
    this.accountService.getAccounts().subscribe((accounts) => {
      this.accounts = accounts;
    });
  }

  filterAccounts(accounts: Account[]) {
    return accounts.filter(acc => acc.currency === this.accountsFilter || this.accountsFilter === '');
  }
}

