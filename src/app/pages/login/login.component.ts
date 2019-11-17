import { Component, OnInit } from '@angular/core';
import { ApiCallsService } from '../../common/ApiCalls/ApiCalls.service';
import { HandleDataService } from 'src/app/common/functions/handle-data.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],

  providers: [ApiCallsService]
})
export class LoginComponent implements OnInit {

  public user = '';
  constructor(public apiCallservice: ApiCallsService,
    public handleData: HandleDataService,
    public router: Router) {

  }

  ngOnInit() {
  }
  login() {
    console.log(this.user);
    if (this.user === '') {
      alert('Plz ener a name');
    } else {
      this.handleData.saveData(this.user);
      this.router.navigate(['feedback']);
    }
  }
}