import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule }   from '@angular/forms';
import { HttpModule }    from '@angular/http';
import { AppComponent }  from './app.component';
import { NavbarComponent }  from './navbar/navbar.component';
import { LoginComponent }  from './login/login.component';
import { HomeComponent } from './components/home.component';

import { routing }  from './app.routing';

import { LoginService } from './services/login.service';
import {AccountEventsService} from './account/account.events.service';
import {HelperService} from './services/helper.service';
import {HomeService} from './services/home.service';
import {SharedEventService} from './services/sharedEvent.service';



@NgModule({
  imports:      [ BrowserModule,
                  FormsModule,
                  HttpModule,
                  routing ],
  declarations: [ AppComponent,
                  NavbarComponent,
                  LoginComponent,
                  HomeComponent ],
  providers:    [ LoginService , AccountEventsService, HelperService, NavbarComponent, HomeService, SharedEventService],
  bootstrap:    [ AppComponent ],
    
})
export class AppModule { }
