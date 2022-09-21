/* eslint-disable @nrwl/nx/enforce-module-boundaries */
import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { AccountService } from 'libs/shared/services/src/lib/account.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'angular-anim-account-details',
  templateUrl: './account-details.component.html',
  styleUrls: ['./account-details.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})

export class AccountDetailsComponent implements OnInit {
  accounts: any;

  constructor(private route:ActivatedRoute, private accountService:AccountService){}

  ngOnInit(){
    this.getOne();
    }

    getOne(){
      const id = this.route.snapshot.params["id"];
      console.log(id);
      const balance = this.accountService.getDetails(id);
      console.log(balance);
      this.accounts = this.accountService.getDetails(id);
    }

}
