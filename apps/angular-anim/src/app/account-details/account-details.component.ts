/* eslint-disable @nrwl/nx/enforce-module-boundaries */
import { ChangeDetectionStrategy, Component, OnInit,  NgModule } from '@angular/core';
import { AccountService } from 'libs/shared/services/src/lib/account.service';
import { ActivatedRoute } from '@angular/router';
import { Account } from 'libs/shared/services/src/lib/account';

@Component({
  selector: 'angular-anim-account-details',
  templateUrl: './account-details.component.html',
  styleUrls: ['./account-details.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})

export class AccountDetailsComponent implements OnInit{
  accounts:any;
  id = '';
  accountsArr:Account[] = []
  constructor(private route:ActivatedRoute, private accountService:AccountService){}

  ngOnInit(){
    // instatiate id that will store needed data
    this.id = this.route.snapshot.params["id"];
    this.accounts = this.accountService.getDetails(this.id);

  }

  getValue(){
    const value = (<HTMLInputElement>document.getElementById('search')).value;
    console.log(value);
    this.accounts = this.accountService.getDetails(value);
  }
}
