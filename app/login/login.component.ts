import { Component, OnInit } from '@angular/core';
import {Observable}  from 'rxjs/Observable';
import {LoginService} from '../services/login.service';
import {Account} from '../account/account';
import {Router} from '@angular/router';
import {NavbarComponent} from '../navbar/navbar.component';
import {SharedEventService} from '../services/sharedEvent.service';


@Component({
  moduleId: module.id,
  selector: 'app-login',
  templateUrl: './login.component.html',
})
export class LoginComponent implements OnInit {

  loggedIn: boolean;
  loginError : boolean;
  username: string;
  password: string;
  account:Account;
  router:Router;
  error:string;
	constructor (private loginService: LoginService, router: Router, private sharedEventservice: SharedEventService) {

        this.router = router;
        this.loginService = loginService;
        localStorage.setItem('PortalAdminHasLoggedIn', '');
        if(localStorage.getItem('PortalAdminHasLoggedIn') == 'true'){
              this.loggedIn = true;
          }else{
              this.loggedIn = false;
          }
        
    sharedEventservice.onMainEvent.subscribe(
      (loggedIn:boolean) => {
        this.loggedIn = loggedIn;
      }
   );
   
  }
  
  onSubmit() {
  	this.loginService.sendCredential(this.username, this.password).subscribe(
      account => {
        this.account = account;
        this.account.authenticated = true;
        console.log('Successfully logged',account);
        this.sharedEventservice.onMainEvent.emit(true);
        this.loginError= false;
        localStorage.setItem('PortalAdminHasLoggedIn', 'true');
        //this.router.navigate(['/login']);        
        this.router.navigateByUrl('/home');
        //location.reload();
      },
      err => {
        this.loginError= true;
        console.log(err)
      }
    );
  }

  ngOnInit() {}

}
