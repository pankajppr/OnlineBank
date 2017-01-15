import { Component, OnInit } from '@angular/core';
import { LoginService } from '../services/login.service';
import { Router } from '@angular/router';
import {HomeService} from '../services/home.service';
import {Token} from '../dto/token';
import {Observable}  from 'rxjs/Observable';
import {AccountEventsService} from '../account/account.events.service';
import {SharedEventService} from '../services/sharedEvent.service';
import {HelperService} from '../services/helper.service';


@Component({
  moduleId: module.id,
  selector: 'app-navbar',
  templateUrl: './navbar.component.html'
})
export class NavbarComponent implements OnInit {

	loggedIn: boolean;
	token:Token;
	constructor(private loginService: LoginService, 
							private router : Router, 
							private sharedEventservice: SharedEventService,
							private helperService: HelperService) {

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

	logout(){
					this.loginService.logout().subscribe(
								res => {
									this.loggedIn = false;
									localStorage.setItem('PortalAdminHasLoggedIn', '');
									this.sharedEventservice.onMainEvent.emit(false);
							},
						err => console.log(err)
					);
		this.router.navigateByUrl('/login');
	}

	getDisplay() {
    if(!this.loggedIn){
      return "none";
    } else {
      return "";
    }
  }

  ngOnInit() {
  }

}
