import { Component, OnInit } from '@angular/core';
import {HomeService} from '../services/home.service';
import {Token} from '../dto/token';
import {HelperService} from '../services/helper.service';
import {Router} from '@angular/router';

@Component({
  moduleId: module.id,
  selector: 'home-component',
  templateUrl: './home.component.html',
})
export class HomeComponent implements OnInit{
   private loggedIn: boolean;
    id : string;
    content : string;
    token:Token;
    router:Router;
    constructor (private homeService: HomeService, private helperService:HelperService, router: Router){
        this.router = router;
        if(localStorage.getItem('PortalAdminHasLoggedIn') == 'true'){
            this.loggedIn = true;
        }else{
            this.loggedIn = false;
        }
    }
   
   getHomeResources(){
        this.helperService.getToken().subscribe(
        token => {
           this.token = token;
            this.homeService.getHomeResources(token).subscribe(
			res => { 
				this.id= res.id;
                this.content = res.content;
			})
        },
        (err: any) => { 
            console.log(err.status); console.log(err);
            this.router.navigate(['/login']);
            }
     )};
   
   
    ngOnInit() {
        //console.log("Home component ngOnInit constructor");        
        if(this.loggedIn == false){
            this.router.navigate(['/login']);
        }else{
            this.getHomeResources();
        }
        
    }
}